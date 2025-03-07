module.exports = {
  name: "account",
  label: "Account",
  description: "Represents customer accounts and their associated information.",
  fields: [
    {
      name: "Name",
      label: "Account Name",
      type: "text",
      required: true,
      order: 1,
    },
    {
      name: "Type",
      label: "Account Type",
      type: "dropdown",
      options: { static: ["Individual", "Business", "Government"] },
      required: false,
      order: 2,
    },
    {
      name: "ParentId",
      label: "Parent Account",
      type: "lookup",
      options: {
        dynamic: {
          objectName: "account",
          displayField: "Name",
          valueField: "_id",
        },
      },
      required: false,
      order: 3,
    },
    { name: "BillingStreet", label: "Billing Street", type: "text", order: 4 },
    { name: "BillingCity", label: "Billing City", type: "text", order: 5 },
    { name: "BillingState", label: "Billing State", type: "text", order: 6 },
    {
      name: "BillingPostalCode",
      label: "Billing Postal Code",
      type: "text",
      order: 7,
    },
    {
      name: "BillingCountry",
      label: "Billing Country",
      type: "text",
      order: 8,
    },
    {
      name: "ShippingStreet",
      label: "Shipping Street",
      type: "text",
      order: 9,
    },
    { name: "ShippingCity", label: "Shipping City", type: "text", order: 10 },
    { name: "Phone", label: "Phone Number", type: "phone", order: 11 },
    { name: "Fax", label: "Fax Number", type: "text", order: 12 },
    { name: "Website", label: "Website", type: "url", order: 13 },
    {
      name: "Industry",
      label: "Industry",
      type: "dropdown",
      options: { static: ["Technology", "Finance", "Healthcare", "Retail"] },
      order: 14,
    },
    {
      name: "AnnualRevenue",
      label: "Annual Revenue",
      type: "currency",
      order: 15,
    },
    {
      name: "NumberOfEmployees",
      label: "Number of Employees",
      type: "number",
      order: 16,
    },
    { name: "Description", label: "Description", type: "textarea", order: 17 },
    {
      name: "OwnerId",
      label: "Owner",
      type: "lookup",
      options: {
        dynamic: {
          objectName: "user",
          displayField: "name",
          valueField: "_id",
        },
      },
      order: 18,
    },
    { name: "RenewalDate", label: "Renewal Date", type: "date", order: 19 },
    { name: "Global", label: "Global Account", type: "checkbox", order: 20 },
    { name: "Referrer", label: "Referrer", type: "text", order: 21 },
    { name: "CurrentBroker", label: "Current Broker", type: "text", order: 22 },
    {
      name: "Days_Since_Created",
      label: "Days Since Created",
      type: "number",
      order: 23,
    },
    {
      name: "IsNextYearLeap",
      label: "Next Year is Leap Year",
      type: "checkbox",
      order: 24,
    },
    {
      name: "NextRenewalOn",
      label: "Next Renewal On",
      type: "datetime",
      order: 25,
    },
    {
      name: "BDM",
      label: "Business Development Manager",
      type: "dropdown",
      options: { static: ["John Doe", "Jane Smith", "Alice Johnson"] },
      order: 26,
    },
  ],
  relationships: [
    {
      name: "Contacts",
      relatedObject: "contact",
      type: "one-to-many",
    },
    {
      name: "Locations",
      relatedObject: "location",
      type: "one-to-many",
    },
    {
      name: "Buildings",
      relatedObject: "building",
      type: "one-to-many",
    },
  ],
};