import {IContact} from "./IContact";

export class AddressBook {
    /** Contacts index */
    contacts: {[address: string]: IContact}
    /** Address book version */
    static version = 1;

    constructor(contacts: IContact[] = []) {
        this.contacts = contacts.reduce( (acc, contact) => {
            acc[uglifyAddress(contact.address)] = contact;
            return acc;
        }, {});
    }

    /**
     * Get all contacts by a given address
     * @param address
     */
    getAllByAddress(address: string) {
        Object.values(this.contacts).filter(contact => address === contact.address);
    }

    /**
     * Add new contact
     * @param contact
     */
    addContact(contact: IContact): IContact {
        this.contacts[uglifyAddress(contact.address)] = contact;
        return this.contacts[uglifyAddress(contact.address)];
    }

    /**
     * Remove contact by its address
     * @param address
     */
    removeContact(address: string): IContact[] {
        delete this.contacts[uglifyAddress(address)];
        return Object.values(this.contacts);
    }

    /**
     * Update a contact by its address
     * @param address
     * @param newContact
     */
    updateContact(address: string, newContact: IContact): IContact {
        this.removeContact(address);
        return this.addContact(newContact);
    }

    /**
     * Export AddressBook to JSON format
     * @param pretty
     */
    toJSON(pretty: boolean = true): string {
        return JSON.stringify({
            version: AddressBook.version,
            contacts: Object.values(this.contacts)
        }, null, pretty ? '\t' : '');
    }

    /**
     * Import AddressBook from JSON format
     * @param input
     */
    static fromJSON(input: string | Object): AddressBook {
        let obj: any;
        if (typeof input === 'string') {
            try {
                obj = JSON.parse(input);
            } catch (e) {
                throw new Error("Error creating AddressBook: invalid JSON string");
            }
        } else {
            obj = input;
        }
        if (!obj.hasOwnProperty('version') || obj.version !== AddressBook.version) {
            throw new Error("Error creating AddressBook: versions don't match");
        }
        if (!obj.hasOwnProperty('contacts') || !Array.isArray(obj.contacts)) {
            throw new Error("Error creating AddressBook: property contacts not found");
        }
        const addressBook = new AddressBook();
        for (let contact of obj.contacts) {
            if (!contact.hasOwnProperty('name') || !contact.hasOwnProperty('address')) {
                throw new Error("Error creating AddressBook: contact has an invalid format");
            }
            addressBook.addContact(contact);
        }
        return addressBook;
    }
}

/**
 * Util function to uglify an address
 * @param address
 */
const uglifyAddress = (address: string) => {
    return address.replace(/-/g, '');
}
