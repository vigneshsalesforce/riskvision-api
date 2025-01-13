const nonStandardAssessment = {
  screens: [
    {
      name: "General Information",
      sequence: 1,
      sections: [
        {
          name: "Basic Details",
          sequence: 1,
          fields: [
            {
              label: "Non-Standard Assessment Name",
              type: "string",
              sequence: 1,
            },
            {
              label: "Assigned To",
              type: "reference",
              sequence: 2,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 3,
            },
            {
              label: "Company Location",
              type: "reference",
              sequence: 4,
            },
            {
              label: "Conferred With",
              type: "textarea",
              sequence: 5,
            },
            {
              label: "Date of Assessment",
              type: "date",
              sequence: 6,
            },
            {
              label: "Last Modified By",
              type: "string",
              sequence: 7,
            },
            {
              label: "Reviewed By",
              type: "reference",
              sequence: 8,
            },
            {
              label: "Reviewer Comment",
              type: "textarea",
              sequence: 9,
            },
            {
              label: "Status",
              type: "picklist",
              sequence: 10,
              picklistValues: [
                { label: "In Progress", value: "In Progress" },
                { label: "Completed", value: "Completed" },
                { label: "Not Started", value: "Not Started" },
              ],
            },
            {
              label: "Report Due Date",
              type: "date",
              sequence: 11,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = nonStandardAssessment;