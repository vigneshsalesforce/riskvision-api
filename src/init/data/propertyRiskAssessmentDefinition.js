module.exports = {
  name: "propertyriskassessment",
  label: "Property Risk Assessment",
  description: "Property Risk Assessment Form",
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
              name: "PropertyRiskAssessmentName",
              label: "Property Risk Assessment Name",
              type: "text",
              sequence: 1,
              required: true,
            },
            {
              name: "Company",
              label: "Company",
              type: "lookup",
              sequence: 2,
              options: {
                dynamic: {
                  objectName: "account",
                  displayField: "Name",
                  valueField: "_id",
                },
              },
            },
            {
              name: "Location",
              label: "Location",
              type: "lookup",
              sequence: 3,
              options: {
                dynamic: {
                  objectName: "location",
                  displayField: "Name",
                  valueField: "_id",
                },
              },
            },
            {
              name: "CompletedByName",
              label: "Completed By Name",
              type: "text",
              sequence: 4,
            },
            {
              name: "AssignedTo",
              label: "Assigned To",
              type: "lookup",
              sequence: 5,
              options: {
                dynamic: {
                  objectName: "contact",
                  displayField: "Name",
                  valueField: "_id",
                },
              },
            },
            {
              name: "CompletedHotWorkPermitObserved",
              label: "Completed Hot Work Permit Observed",
              type: "dropdown",
              sequence: 6,
              options: {
                static: [],
              },
            },
            {
              name: "DateofAssessment",
              label: "Date of Assessment",
              type: "date",
              sequence: 7,
            },
            {
              name: "AccountManager",
              label: "Account Manager",
              type: "text",
              sequence: 8,
            },
            {
              name: "ReviewedByName",
              label: "Reviewed By Name",
              type: "text",
              sequence: 9,
            },
            {
              name: "ReviewedBy",
              label: "Reviewed By",
              type: "lookup",
              sequence: 10,
              options: {
                dynamic: {
                  objectName: "user",
                  displayField: "Name",
                  valueField: "_id",
                },
              },
            },
            {
              name: "LastInspection",
              label: "Last Inspection",
              type: "date",
              sequence: 11,
            },
            {
              name: "Comment",
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
              name: "AreaLocatedProcess",
              label: "Area Located/Process",
              type: "textarea",
              sequence: 13,
            },
            {
              name: "AreaSquareMetres",
              label: "Area (Square Metres)",
              type: "number",
              sequence: 14,
            },
            {
              name: "FullAddress",
              label: "Full Address",
              type: "text",
              sequence: 15,
            },
            {
              name: "LocationID",
              label: "LocationID",
              type: "text",
              sequence: 16,
            },
            {
              name: "DistanceFromSite",
              label: "Distance from Site (km)",
              type: "number",
              sequence: 17,
            },
            {
              name: "Height",
              label: "Height (m)",
              type: "number",
              sequence: 18,
            },
            {
              name: "Demographic",
              label: "Demographic",
              type: "text",
              sequence: 19,
            },
            {
              name: "East",
              label: "East",
              type: "text",
              sequence: 20,
            },
            {
              name: "North",
              label: "North",
              type: "text",
              sequence: 21,
            },
            {
              name: "Owned",
              label: "Owned",
              type: "text",
              sequence: 22,
            },
            {
              name: "South",
              label: "South",
              type: "text",
              sequence: 23,
            },
            {
              name: "West",
              label: "West",
              type: "text",
              sequence: 24,
            },
            {
              name: "TotalLandArea",
              label: "Total Land Area",
              type: "text",
              sequence: 25,
            },
            {
              name: "YearConstructed",
              label: "YearConstructed",
              type: "number",
              sequence: 26,
            },
            {
              name: "NoOfTenants",
              label: "No. of Tenants",
              type: "text",
              sequence: 27,
            },
            {
              name: "NumberOfEmployeesAtSite",
              label: "Number of Employees at Site",
              type: "text",
              sequence: 28,
            },
            {
              name: "HoursOfOperation",
              label: "Hours of Operation",
              type: "text",
              sequence: 29,
            },
            {
              name: "EstimatedNumberOfPublicAccessPerWeek",
              label: "Estimated no. of public access per week",
              type: "text",
              sequence: 30,
            },
            {
              name: "NearestPublicFireBrigadeLocatedAt",
              label: "Nearest Public Fire Brigade Located At",
              type: "text",
              sequence: 31,
            },
            {
              name: "Other",
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
              name: "AccessibleWindowsFittedWithLocks",
              label: "Accessible Windows Fitted with Locks",
              type: "dropdown",
              sequence: 33,
              options: {
                static: [],
              },
            },
            {
              name: "ActivatedBy",
              label: "Activated By",
              type: "dropdown",
              sequence: 34,
              options: {
                static: [],
              },
            },
            {
              name: "AdequacyForTheRisk1",
              label: "Adequacy for the Risk",
              type: "dropdown",
              sequence: 35,
              options: {
                static: [
                  'High',
                  'Medium',
                  'Low',
                ],
              },
            },
            {
              name: "AdequacyForTheRisk2",
              label: "Adequacy for the Risk",
              type: "dropdown",
              sequence: 36,
              options: {
                static: [],
              },
            },
            {
              name: "AdequacyOfHydrantCoverage",
              label: "Adequacy of Hydrant Coverage",
              type: "dropdown",
              sequence: 37,
              options: {
                static: [],
              },
            },
            {
              name: "AdequateResults",
              label: "Adequate Results",
              type: "dropdown",
              sequence: 38,
              options: {
                static: [],
              },
            },
            {
              name: "AircraftImpact",
              label: "Aircraft Impact",
              type: "dropdown",
              sequence: 39,
              options: {
                static: [],
              },
            },
            {
              name: "AlarmConnection",
              label: "Alarm Connection",
              type: "dropdown",
              sequence: 40,
              options: {
                static: [],
              },
            },
            {
              name: "AlarmType",
              label: "Alarm Type",
              type: "dropdown",
              sequence: 41,
              options: {
                static: [],
              },
            },
            {
              name: "Alarm",
              label: "Alarm",
              type: "dropdown",
              sequence: 42,
              options: {
                static: [],
              },
            },
            {
              name: "AlternativeSuppliers",
              label: "Alternative Suppliers",
              type: "dropdown",
              sequence: 43,
              options: {
                static: [],
              },
            },
            {
              name: "AlternativeSupply",
              label: "Alternative Supply",
              type: "text",
              sequence: 44,
            },
            {
              name: "AnnualFireSafetyStatement",
              label: "Annual Fire Safety Statement",
              type: "dropdown",
              sequence: 45,
              options: {
                static: [],
              },
            },
            {
              name: "AnnualFlowTests",
              label: "Annual Flow Tests",
              type: "dropdown",
              sequence: 46,
              options: {
                static: [],
              },
            },
            {
              name: "AnticipatedAttendanceTime",
              label: "Anticipated Attendance Time (minutes)",
              type: "text",
              sequence: 47,
            },
            {
              name: "AnyAsbestos",
              label: "Any Asbestos",
              type: "dropdown",
              sequence: 48,
              options: {
                static: [],
              },
            },
            {
              name: "AnyCustomersMoreThan10Profit",
              label: "Any customers (more than 10% Profit)",
              type: "dropdown",
              sequence: 49,
              options: {
                static: [],
              },
            },
            {
              name: "AppropriateElectricalInstallation",
              label: "Appropriate Electrical Installation",
              type: "dropdown",
              sequence: 50,
              options: {
                static: [],
              },
            },
          ],
        },
      ],
    },
  ],
};