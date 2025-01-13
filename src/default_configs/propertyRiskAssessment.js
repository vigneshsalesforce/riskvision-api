const propertyRiskAssessment = {
  screens: [
    {
      name: "Basic Property Details",
      sequence: 1,
      sections: [
        {
          name: "Company Details",
          sequence: 1,
          fields: [
            {
              label: "Property Risk Assessment Name",
              type: "text",
              sequence: 1,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 2,
              relationshipName: "Company",
            },
            {
              label: "Company Location",
              type: "reference",
              sequence: 3,
              relationshipName: "Location",
            },
            {
              label: "Completed By Name",
              type: "text",
              sequence: 4,
            },
            {
              label: "Assigned To",
              type: "reference",
              sequence: 5,
              relationshipName: "Contact",
            },
            {
              label: "Completed Hot Work Permit Observed",
              type: "picklist",
              sequence: 6,
              picklistValues: [],
            },
            {
              label: "Date of Assessment",
              type: "date",
              sequence: 7,
            },
            {
              label: "Account Manager",
              type: "text",
              sequence: 8,
            },
            {
              label: "Reviewed By Name",
              type: "text",
              sequence: 9,
            },
            {
              label: "Reviewed By",
              type: "reference",
              sequence: 10,
              relationshipName: "User",
            },
            {
              label: "Last Inspection",
              type: "date",
              sequence: 11,
            },
            {
              label: "Comment",
              type: "textarea",
              sequence: 12,
            },
          ],
        },
        {
          name: "General Details",
          sequence: 2,
          fields: [
            {
              label: "Area Located/Process",
              type: "textarea",
              sequence: 13,
            },
            {
              label: "Area (Square Metres)",
              type: "number",
              sequence: 14,
            },
            {
              label: "Full Address",
              type: "text",
              sequence: 15,
            },
            {
              label: "LocationID",
              type: "text",
              sequence: 16,
            },
            {
              label: "Distance from Site (km)",
              type: "number",
              sequence: 17,
            },
            {
              label: "Height (m)",
              type: "number",
              sequence: 18,
            },
            {
              label: "Demographic",
              type: "text",
              sequence: 19,
            },
            {
              label: "East",
              type: "text",
              sequence: 20,
            },
            {
              label: "North",
              type: "text",
              sequence: 21,
            },
            {
              label: "Owned",
              type: "text",
              sequence: 22,
            },
            {
              label: "South",
              type: "text",
              sequence: 23,
            },
            {
              label: "West",
              type: "text",
              sequence: 24,
            },
            {
              label: "Total Land Area",
              type: "text",
              sequence: 25,
            },
            {
              label: "YearConstructed",
              type: "number",
              sequence: 26,
            },
            {
              label: "No. of Tenants",
              type: "text",
              sequence: 27,
            },
            {
              label: "Number of Employees at Site",
              type: "text",
              sequence: 28,
            },
            {
              label: "Hours of Operation",
              type: "text",
              sequence: 29,
            },
            {
              label: "Estimated no. of public access per week",
              type: "text",
              sequence: 30,
            },
            {
              label: "Nearest Public Fire Brigade Located At",
              type: "text",
              sequence: 31,
            },
            {
              label: "Other",
              type: "text",
              sequence: 32,
            },
          ],
        },
        {
          name: "Risk Assessment",
          sequence: 3,
          fields: [
            {
              label: "Accessible Windows Fitted with Locks",
              type: "picklist",
              sequence: 33,
              picklistValues: [],
            },
            {
              label: "Activated By",
              type: "multipicklist",
              sequence: 34,
              picklistValues: [],
            },
            {
              label: "Adequacy for the Risk",
              type: "picklist",
              sequence: 35,
              picklistValues: [],
            },
            {
              label: "Adequacy for the Risk",
              type: "picklist",
              sequence: 36,
              picklistValues: [],
            },
            {
              label: "Adequacy of Hydrant Coverage",
              type: "picklist",
              sequence: 37,
              picklistValues: [],
            },
            {
              label: "Adequate Results",
              type: "picklist",
              sequence: 38,
              picklistValues: [],
            },
            {
              label: "Aircraft Impact",
              type: "picklist",
              sequence: 39,
              picklistValues: [],
            },
            {
              label: "Alarm Connection",
              type: "picklist",
              sequence: 40,
              picklistValues: [],
            },
            {
              label: "Alarm Type",
              type: "picklist",
              sequence: 41,
              picklistValues: [],
            },
            {
              label: "Alarm",
              type: "picklist",
              sequence: 42,
              picklistValues: [],
            },
            {
              label: "Alternative Suppliers",
              type: "picklist",
              sequence: 43,
              picklistValues: [],
            },
            {
              label: "Alternative Supply",
              type: "text",
              sequence: 44,
            },
            {
              label: "Annual Fire Safety Statement",
              type: "picklist",
              sequence: 45,
              picklistValues: [],
            },
            {
              label: "Annual Flow Tests",
              type: "picklist",
              sequence: 46,
              picklistValues: [],
            },
            {
              label: "Anticipated Attendance Time (minutes)",
              type: "text",
              sequence: 47,
            },
            {
              label: "Any Asbestos",
              type: "picklist",
              sequence: 48,
              picklistValues: [],
            },
            {
              label: "Any customers (more than 10% Profit)",
              type: "picklist",
              sequence: 49,
              picklistValues: [],
            },
            {
              label: "Appropriate Electrical Installation",
              type: "picklist",
              sequence: 50,
              picklistValues: [],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = propertyRiskAssessment;