/*
 * (C) Symbol Contributors 2021
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
import { AddressBook } from "../../../AddressBook";
import { IContact } from "../../../IContact";

export const addressBookMock = new AddressBook();
export const contact1: IContact = {
    id: "5c9093c7-2da2-476e-bc28-87f24a83cd0c",
    address: "TAVVVJBBCTYJDWC7TQPSVNHK2IPNY6URKK4DTHY",
    name: "Alice",
    phone: "+34 000000000",
    isBlackListed: false,
};

export const contact2: IContact = {
    id: "5c9093c7-2da2-476e-bc28-87f24a83cd0t",
    address: "TAZZZJBBCTYJDWC7TQPSVNHK2IPNY6URKK4DTHY",
    name: "Bob",
    phone: "+20 000000000",
    isBlackListed: false,
};

export const contact3: IContact = {
    id: "5c9093c7-2da2-476e-bc28-87f24a83cd0z",
    address: "TAPPPVJBBCTYJDWC7TQPSVNHK2IPNY6URKK4DTHY",
    name: "James",
    phone: "+99 000000000",
    isBlackListed: true,
};

addressBookMock.addContact(contact1);
addressBookMock.addContact(contact2);
addressBookMock.addContact(contact3);
