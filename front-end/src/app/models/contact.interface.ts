export interface Contact {
    _id?: string;
    name: string;
    email: string;
    job: string;
    location: string;
    tagSelect: string;
    facebook: string;
    github: string;
    twitter: string;
    linkedin: string;
}

export interface ContactToken {
    contact: Contact;
    token: string;
    id?: string;
}
