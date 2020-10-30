export interface IContact {
    /** Unique field / identifier */
    address: string,
    /** Name: Required */
    name: string,
    /** Phone */
    phone?: string,
    /** Email */
    email?: string,
    /** Label */
    label?: string,
    /** Personal contact notes */
    notes?: string,
}
