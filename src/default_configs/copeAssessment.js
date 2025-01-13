const copeAssessment = {
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
              label: "COPE Assessment Name",
              type: "string",
              sequence: 1,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 2,
              relationshipName: "Company",
            },
            {
              label: "Location",
              type: "reference",
              sequence: 3,
              relationshipName: "Location",
            },
            {
              label: "Date of Assessment",
              type: "date",
              sequence: 4,
            },
            {
              label: "Assigned To",
              type: "reference",
              sequence: 5,
              relationshipName: "CompletedBy",
            },
            {
              label: "Conferred With",
              type: "textarea",
              sequence: 6,
            },
            {
              label: "Background",
              type: "textarea",
              sequence: 7,
            },
            {
              label: "Property Risk Assessment",
              type: "reference",
              sequence: 8,
              relationshipName: "PropertyRiskAssessmentID",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = copeAssessment;
