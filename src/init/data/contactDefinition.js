module.exports = {
  name: "contact",
  label: "Contact",
  description: "Represents an individual contact associated with an account.",
  fields: [
    {
      name: "Account",
      label: "Account",
      type: "lookup",
      options: {
        dynamic: {
          objectName: "account",
          displayField: "Name",
          valueField: "_id",
        },
      },
      required: false,
      order: 1,
    },
    {
      name: "LastName",
      label: "Last Name",
      type: "text",
      required: true,
      order: 2,
    },
    { name: "FirstName", label: "First Name", type: "text", order: 3 },
    {
      name: "Salutation",
      label: "Salutation",
      type: "dropdown",
      options: { static: ["Mr.", "Mrs.", "Ms.", "Dr."] },
      order: 4,
    },
    { name: "Name", label: "Full Name", type: "text", order: 5 },
    { name: "OtherStreet", label: "Other Street", type: "text", order: 6 },
    { name: "OtherCity", label: "Other City", type: "text", order: 7 },
    { name: "OtherState", label: "Other State", type: "text", order: 8 },
    {
      name: "OtherPostalCode",
      label: "Other Postal Code",
      type: "text",
      order: 9,
    },
    { name: "OtherCountry", label: "Other Country", type: "text", order: 10 },
    { name: "MailingStreet", label: "Mailing Street", type: "text", order: 11 },
    { name: "MailingCity", label: "Mailing City", type: "text", order: 12 },
    { name: "MailingState", label: "Mailing State", type: "text", order: 13 },
    {
      name: "MailingPostalCode",
      label: "Mailing Postal Code",
      type: "text",
      order: 14,
    },
    {
      name: "MailingCountry",
      label: "Mailing Country",
      type: "text",
      order: 15,
    },
    { name: "Phone", label: "Phone Number", type: "phone", order: 16 },
    { name: "MobilePhone", label: "Mobile Phone", type: "phone", order: 17 },
    { name: "Email", label: "Email", type: "email", unique: true, order: 18 },
    { name: "Title", label: "Title", type: "text", order: 19 },
    { name: "Department", label: "Department", type: "text", order: 20 },
    {
      name: "LeadSource",
      label: "Lead Source",
      type: "dropdown",
      options: {
        static: ["Referral", "Advertisement", "Website", "Social Media"],
      },
      order: 21,
    },
    { name: "Birthdate", label: "Birthdate", type: "date", order: 22 },
    { name: "Description", label: "Description", type: "textarea", order: 23 },
    {
      name: "ContactSource",
      label: "Contact Source",
      type: "dropdown",
      options: { static: ["Manual Entry", "System Generated"] },
      order: 24,
    },
    {
      name: "Executive_Assistant",
      label: "Executive Assistant",
      type: "text",
      order: 25,
    },
    { name: "Book", label: "Book", type: "checkbox", order: 26 },
    {
      name: "Contact_Type_Old",
      label: "Old Contact Type",
      type: "dropdown",
      options: { static: ["Primary", "Secondary", "Tertiary"] },
      order: 27,
    },
    {
      name: "Receive_Christmas_Card",
      label: "Receive Christmas Card",
      type: "checkbox",
      order: 28,
    },
    {
      name: "Other_Referral",
      label: "Other Referral",
      type: "text",
      order: 29,
    },
    {
      name: "Connected_in_LinkedIn",
      label: "Connected in LinkedIn",
      type: "checkbox",
      order: 30,
    },
    {
      name: "Account_Manager",
      label: "Account Manager",
      type: "text",
      order: 31,
    },
  ],
};