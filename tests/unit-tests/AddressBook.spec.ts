/*
 * (C) Symbol Contributors 2021 Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
import "jest";
import { AddressBook } from "../../AddressBook";
import { IContact } from "../../IContact";
import { addressBookMock, contact2, contact3 } from "./mocks/AddressBookMock";
describe("Test getAllContacts()", () => {
    test("all contacts should be loaded", () => {
        expect(addressBookMock.getAllContacts().length).toBe(3);
    });
});
describe("Test getBlackListedContacts()", () => {
    test("blacklisted contacts only should be loaded", () => {
        expect(addressBookMock.getBlackListedContacts().length).toBe(1);
    });
});
describe("Test getWhiteListedContacts()", () => {
    test("whitelisted contacts only should be loaded", () => {
        expect(addressBookMock.getWhiteListedContacts().length).toBe(2);
    });
});
describe("Test getContactByAddress()", () => {
    test("should return one contact", () => {
        const contact = addressBookMock.getContactByAddress(
            contact3.address
        );
        expect(contact?.address).toEqual(contact3.address);
    });
});
describe("Test getContactById()", () => {
    test("should return one contact with the correct id", () => {
        const contact = addressBookMock.getContactById(contact3.id);
        expect(contact?.address).toEqual(contact3.address);
    });
});
describe("Test updateContact()", () => {
    test("should update contact name", () => {
        let updatedContact: IContact = contact3;
        updatedContact.name = "xym";
        addressBookMock.updateContact(contact3.id, updatedContact);
        const savedContact = addressBookMock.getContactById(contact3.id)
        expect(savedContact?.name).toEqual("xym");
    });
});
describe("Test addContact()", () => {
    test("should add contact to current addressBook", () => {
        const addressBookMockModel = new AddressBook();
        const contact: IContact = {
            id: "5c9093c7-2da2-476e-bc28-87f24a83cd1v",
            address: "TAXXXVJBBCTYJDWC7TQPSVNHK2IPNY6URKK4DTHY",
            name: "Test",
            phone: "+19 000000000",
            isBlackListed: true,
        };
        addressBookMockModel.addContact(contact);
        expect(addressBookMockModel.getAllContacts().length).toBe(1);
    });
});
describe("Test removeContact()", () => {
    test("should remove contact from current addressBook", () => {
        const addressBookMockModel = new AddressBook();
        addressBookMockModel.addContact(contact2)
        addressBookMockModel.addContact(contact3)
        addressBookMockModel.removeContact(contact2.id);
        expect(addressBookMockModel.getAllContacts().length).toBe(1);
    });
});
