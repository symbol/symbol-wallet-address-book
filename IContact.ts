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
export interface IContact {
    /** Unique field / identifier */
    id: string,
    /** Address: Required */
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
    /** Whether contact is blacklisted or not */
    isBlackListed?: boolean,
}
