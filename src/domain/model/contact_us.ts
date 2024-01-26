class ContactUs {
  constructor({
    firstName,
    lastName,
    email,
    phone,
    organization,
    message,
    timestamp,
    date,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
    timestamp: Date;
    date: Date;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.organization = organization;
    this.message = message;
    this.timestamp = timestamp;
    this.date = date;
  }

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  timestamp: Date;
  date: Date;

  toObject(): Record<string, string> {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      organization: this.organization,
      message: this.message,
      timestamp: this.timestamp.toISOString(),
      date: this.date.toISOString(),
    };
  }
}

export default ContactUs;
