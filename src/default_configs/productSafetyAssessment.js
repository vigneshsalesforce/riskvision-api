const productSafetyAssessment = {
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
              label: "Product Safety Assessment Name",
              type: "string",
              sequence: 1,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 2,
            },
            {
              label: "Location",
              type: "reference",
              sequence: 3,
            },
            {
              label: "Conducted By",
              type: "reference",
              sequence: 4,
            },
            {
              label: "Account Manager",
              type: "string",
              sequence: 5,
            },
            {
              label: "Assigned To",
              type: "reference",
              sequence: 6,
            },
            {
              label: "Date of Assessment",
              type: "date",
              sequence: 7,
            },
            {
              label: "Reviewed by",
              type: "reference",
              sequence: 8,
            },
            {
              label: "Last Modified By",
              type: "string",
              sequence: 9,
            },
            {
              label: "Brands",
              type: "string",
              sequence: 10,
            },
            {
              label: "Markets",
              type: "string",
              sequence: 11,
            },
            {
              label: "Number of Employees",
              type: "double",
              sequence: 12,
            },
            {
              label: "Reviewer Comment",
              type: "textarea",
              sequence: 13,
            },
            {
              label: "Status",
              type: "picklist",
              sequence: 14,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Total Questions",
              type: "double",
              sequence: 15,
            },
            {
              label: "Total Answered",
              type: "double",
              sequence: 16,
            },
            {
              label: "File Name",
              type: "string",
              sequence: 17,
            },
            {
              label: "Report Due Date",
              type: "date",
              sequence: 18,
            },
            {
              label: "Process Description",
              type: "textarea",
              sequence: 19,
            },
            {
              label: "Product Summary",
              type: "textarea",
              sequence: 20,
            },
          ],
        },
        {
          name: "Risk Assessment",
          sequence: 2,
          fields: [
            {
              label: "Administration support has been identifi",
              type: "picklist",
              sequence: 21,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented allergen management program",
              type: "picklist",
              sequence: 22,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented complaint management progra",
              type: "picklist",
              sequence: 23,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented corrective action procedure",
              type: "picklist",
              sequence: 24,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented food recall and withdrawal",
              type: "picklist",
              sequence: 25,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented program is in place to cont1",
              type: "picklist",
              sequence: 26,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented program is in place to cont2",
              type: "picklist",
              sequence: 27,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented program is in place to cont",
              type: "picklist",
              sequence: 28,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A documented supplier approval program i",
              type: "picklist",
              sequence: 29,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A food recall coordinator and a backup a",
              type: "picklist",
              sequence: 30,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A food recall team is appointed",
              type: "picklist",
              sequence: 31,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Allergen risk management and control",
              type: "picklist",
              sequence: 32,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Allergens required to be labelled under",
              type: "picklist",
              sequence: 33,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "All production facilities are secure (pe",
              type: "picklist",
              sequence: 34,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Analytical testing laboratories (chemica",
              type: "picklist",
              sequence: 35,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "An approved supplier list is maintained",
              type: "picklist",
              sequence: 36,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A process is in place to ensure that all",
              type: "picklist",
              sequence: 37,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A recall training program for other staf",
              type: "picklist",
              sequence: 38,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A recall training program for staff invo",
              type: "picklist",
              sequence: 39,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "A test of the traceability system is con",
              type: "picklist",
              sequence: 40,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Authority to approve a food recall",
              type: "picklist",
              sequence: 41,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Back up – Position and/or name of person1",
              type: "picklist",
              sequence: 42,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Back up – position and/or name of person",
              type: "picklist",
              sequence: 43,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Business has a documented list of all cu",
              type: "picklist",
              sequence: 44,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Business has a documented list of all su",
              type: "picklist",
              sequence: 45,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Changes to the food business",
              type: "picklist",
              sequence: 46,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Chemical",
              type: "picklist",
              sequence: 47,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Chemical risk management and control",
              type: "picklist",
              sequence: 48,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Clear Product specifications issued and",
              type: "picklist",
              sequence: 49,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Clear labelling procedures ensure contin",
              type: "picklist",
              sequence: 50,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Closing the food recall",
              type: "picklist",
              sequence: 51,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Communication plan including",
              type: "picklist",
              sequence: 52,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Communication with other stakeholders –",
              type: "picklist",
              sequence: 53,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Company has documented history of meetin",
              type: "picklist",
              sequence: 54,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Company spokesperson identified",
              type: "picklist",
              sequence: 55,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Company spokesperson identified and trai",
              type: "picklist",
              sequence: 56,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Consumer contact information, including",
              type: "picklist",
              sequence: 57,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Consumer support groups such as Allergen",
              type: "picklist",
              sequence: 58,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Contact lists for all key stakeholders a",
              type: "picklist",
              sequence: 59,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Contacts available for any imported raw",
              type: "picklist",
              sequence: 60,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Controls are in place to reduce or elimi",
              type: "picklist",
              sequence: 61,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Corrective Actions with action dates and",
              type: "picklist",
              sequence: 62,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Corrective actions (i.e. release, rework",
              type: "picklist",
              sequence: 63,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Corrective and Preventative actions",
              type: "picklist",
              sequence: 64,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Current list of products by customer",
              type: "picklist",
              sequence: 65,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Customer contact information, including",
              type: "picklist",
              sequence: 66,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Data on foreign matter occurrence is mai1",
              type: "picklist",
              sequence: 67,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Data on foreign matter occurrence is mai2",
              type: "picklist",
              sequence: 68,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Data on foreign matter occurrence is mai",
              type: "picklist",
              sequence: 69,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Decision to recall or withdraw",
              type: "picklist",
              sequence: 70,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Development and approval of key messages",
              type: "picklist",
              sequence: 71,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Distributers",
              type: "picklist",
              sequence: 72,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Documented cleaning and disinfection pro",
              type: "picklist",
              sequence: 73,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Documented food safety policy which is s",
              type: "picklist",
              sequence: 74,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Documented process for conducting a food",
              type: "picklist",
              sequence: 75,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Documented process for identification of",
              type: "picklist",
              sequence: 76,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Documented training records for recall t",
              type: "picklist",
              sequence: 77,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Draft Media Release",
              type: "picklist",
              sequence: 78,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Draft Website notification",
              type: "picklist",
              sequence: 79,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Draft food recall advertisement, includi",
              type: "picklist",
              sequence: 80,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "External advisors and subject matter exp",
              type: "picklist",
              sequence: 81,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Feedback from customers",
              type: "picklist",
              sequence: 82,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Feedback from recall training",
              type: "picklist",
              sequence: 83,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Feedback from regulators",
              type: "picklist",
              sequence: 84,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food Recall Coordinator",
              type: "picklist",
              sequence: 85,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food Recall Team",
              type: "picklist",
              sequence: 86,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food Safety Training is provided for all",
              type: "picklist",
              sequence: 87,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food Safety expertise to assist with ass",
              type: "picklist",
              sequence: 88,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food allergens",
              type: "picklist",
              sequence: 89,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food recall plan refers to and makes use",
              type: "picklist",
              sequence: 90,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food retrieval & disposal",
              type: "picklist",
              sequence: 91,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food safety risk assessment, is document",
              type: "picklist",
              sequence: 92,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food safety training includes covers the",
              type: "picklist",
              sequence: 93,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food safety training is evaluated to ens",
              type: "picklist",
              sequence: 94,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Foreign matter (Physical) risk managemen",
              type: "picklist",
              sequence: 95,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Foreign matter detection systems are in",
              type: "picklist",
              sequence: 96,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Foreign matter (physical)",
              type: "picklist",
              sequence: 97,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Full traceability (100%) can be achieved",
              type: "picklist",
              sequence: 98,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Good Manufacturing Practices (GMP)",
              type: "picklist",
              sequence: 99,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Government contact information – Home St",
              type: "picklist",
              sequence: 100,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Identification & assessment of a food sa",
              type: "picklist",
              sequence: 101,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Identifying distribution of affected pro",
              type: "picklist",
              sequence: 102,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Identify other methods of communication",
              type: "picklist",
              sequence: 103,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Implementation",
              type: "picklist",
              sequence: 104,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Insurance broker",
              type: "picklist",
              sequence: 105,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Internal audits of the food safety progr",
              type: "picklist",
              sequence: 106,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Key Business Contacts",
              type: "picklist",
              sequence: 107,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Legal expertise to assist with assessmen",
              type: "picklist",
              sequence: 108,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Management Responsibility for the food r",
              type: "picklist",
              sequence: 109,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Management Responsibility for traceabili",
              type: "picklist",
              sequence: 110,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Management commitment to food safety & q",
              type: "picklist",
              sequence: 111,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Manufacturing and distribution facilitie",
              type: "picklist",
              sequence: 112,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Member of staff identified with primary",
              type: "picklist",
              sequence: 113,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Microbiological",
              type: "picklist",
              sequence: 114,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Microbiological risk management and cont",
              type: "picklist",
              sequence: 115,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Mock recall outcomes reviewed by the Foo",
              type: "picklist",
              sequence: 116,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Mock recall to include incoming material",
              type: "picklist",
              sequence: 117,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Monitoring of the food recall",
              type: "picklist",
              sequence: 118,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "NATA accredited testing facility (or equ",
              type: "picklist",
              sequence: 119,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Name & contact details for Food Recall C",
              type: "picklist",
              sequence: 120,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Name & contact details for back-up Food",
              type: "picklist",
              sequence: 121,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Names and contact details for key manage",
              type: "picklist",
              sequence: 122,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Names and contact details for key site c",
              type: "picklist",
              sequence: 123,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Names and contact details for members of",
              type: "picklist",
              sequence: 124,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "New Supplier onboarding processes which",
              type: "picklist",
              sequence: 125,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "New staff are provided with induction tr",
              type: "picklist",
              sequence: 126,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "No history of regulatory non-compliance",
              type: "picklist",
              sequence: 127,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Online sales",
              type: "picklist",
              sequence: 128,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Outcomes of actual recalls (if any)",
              type: "picklist",
              sequence: 129,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Outcomes of annual Mock recalls",
              type: "picklist",
              sequence: 130,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Outcomes of mock recalls documented, and",
              type: "picklist",
              sequence: 131,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "PR/Communications agency (if appointed)",
              type: "picklist",
              sequence: 132,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Personal hygiene requirements are docume",
              type: "picklist",
              sequence: 133,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Person(s) in business to notify about a",
              type: "picklist",
              sequence: 134,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Person(s) responsible for food safety ha",
              type: "picklist",
              sequence: 135,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Position and/or name of person with auth1",
              type: "picklist",
              sequence: 136,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Position and/or name of person with auth",
              type: "picklist",
              sequence: 137,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Potential causes of cross contamination",
              type: "picklist",
              sequence: 138,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Preferred supplier or trusted trader sta",
              type: "picklist",
              sequence: 139,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Procedures for approval and monitoring o",
              type: "picklist",
              sequence: 140,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific1",
              type: "picklist",
              sequence: 141,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific2",
              type: "picklist",
              sequence: 142,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific3",
              type: "picklist",
              sequence: 143,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific4",
              type: "picklist",
              sequence: 144,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific5",
              type: "picklist",
              sequence: 145,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific6",
              type: "picklist",
              sequence: 146,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process and responsibilities for notific",
              type: "picklist",
              sequence: 147,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for accounting for recalled prod",
              type: "picklist",
              sequence: 148,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for assessment of a potential fo",
              type: "picklist",
              sequence: 149,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for communicating the terminatio",
              type: "picklist",
              sequence: 150,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for confirming approval of a rec",
              type: "picklist",
              sequence: 151,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for deciding whether to recall o",
              type: "picklist",
              sequence: 152,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for decision on whether to stop",
              type: "picklist",
              sequence: 153,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for determining the scope of the",
              type: "picklist",
              sequence: 154,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for determining the type of reca",
              type: "picklist",
              sequence: 155,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for determining when to terminat",
              type: "picklist",
              sequence: 156,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for disposal of recall product(s",
              type: "picklist",
              sequence: 157,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for investigation of the root ca",
              type: "picklist",
              sequence: 158,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for monitoring the progress of t",
              type: "picklist",
              sequence: 159,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for providing the Final Report t",
              type: "picklist",
              sequence: 160,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for providing the Interim Report",
              type: "picklist",
              sequence: 161,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for reimbursement to consumers",
              type: "picklist",
              sequence: 162,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for retrieval of recalled produc1",
              type: "picklist",
              sequence: 163,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for retrieval of recalled produc",
              type: "picklist",
              sequence: 164,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process for segregation and storage of r",
              type: "picklist",
              sequence: 165,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process to seek advice from the home sta",
              type: "picklist",
              sequence: 166,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Process to test the effectiveness of the",
              type: "picklist",
              sequence: 167,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product distribution list detailing all",
              type: "picklist",
              sequence: 168,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product identification system in place",
              type: "picklist",
              sequence: 169,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product not considered a target for MPT,",
              type: "picklist",
              sequence: 170,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product photos which show product label",
              type: "picklist",
              sequence: 171,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product release procedure in place to en",
              type: "picklist",
              sequence: 172,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product testing program is aligned to th",
              type: "picklist",
              sequence: 173,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Provision for a meeting room for the foo",
              type: "picklist",
              sequence: 174,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Purchased materials and products meet cu",
              type: "picklist",
              sequence: 175,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Raw materials, including packaging are i",
              type: "picklist",
              sequence: 176,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Recall Notification process",
              type: "picklist",
              sequence: 177,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records available from purchase through",
              type: "picklist",
              sequence: 178,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records enabling product identification",
              type: "picklist",
              sequence: 179,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records for approval of products against",
              type: "picklist",
              sequence: 180,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records of coding on finished products a",
              type: "picklist",
              sequence: 181,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records of coding on incoming materials",
              type: "picklist",
              sequence: 182,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Records of finished products and destina",
              type: "picklist",
              sequence: 183,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Regulatory requirements related to the p",
              type: "picklist",
              sequence: 184,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Responsibilities for Food Recall team me",
              type: "picklist",
              sequence: 185,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Retailers",
              type: "picklist",
              sequence: 186,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk and hazard assessment",
              type: "picklist",
              sequence: 187,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk assessment covers critical food saf",
              type: "picklist",
              sequence: 188,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk assessment identifies and assesses",
              type: "multipicklist",
              sequence: 189,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Supplier performance is monitored",
              type: "picklist",
              sequence: 190,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Suppliers are audited to food safety sta",
              type: "picklist",
              sequence: 191,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Suppliers contact information – should i",
              type: "picklist",
              sequence: 192,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Team roles and responsibilities are clea",
              type: "picklist",
              sequence: 193,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The Food Industry Guide to Allergen Mana",
              type: "picklist",
              sequence: 194,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The business facilities are located and",
              type: "picklist",
              sequence: 195,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The business has a documented GMP policy",
              type: "picklist",
              sequence: 196,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan has been reviewed i",
              type: "picklist",
              sequence: 197,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan has clear document",
              type: "picklist",
              sequence: 198,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan includes a checklis",
              type: "picklist",
              sequence: 199,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan includes reference",
              type: "picklist",
              sequence: 200,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan is approved by the",
              type: "picklist",
              sequence: 201,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan is available to all",
              type: "picklist",
              sequence: 202,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food recall plan lists definitions f",
              type: "picklist",
              sequence: 203,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The food safety program is audited again",
              type: "picklist",
              sequence: 204,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The policy is communicated to all staff",
              type: "picklist",
              sequence: 205,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The product recall plan is linked to the",
              type: "picklist",
              sequence: 206,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "There is a process for establishing a bu",
              type: "picklist",
              sequence: 207,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "The traceability system is tested at lea",
              type: "picklist",
              sequence: 208,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Third party Warehouse storage",
              type: "picklist",
              sequence: 209,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Third party certification bodies",
              type: "picklist",
              sequence: 210,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Third party contract manufactures or pac",
              type: "picklist",
              sequence: 211,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Threat assessment conducted and plan in",
              type: "picklist",
              sequence: 212,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Traceability possible through multiple s",
              type: "picklist",
              sequence: 213,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Traceability process regularly tested",
              type: "picklist",
              sequence: 214,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Training",
              type: "picklist",
              sequence: 215,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Trend analysis of complaints and correct",
              type: "picklist",
              sequence: 216,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Up to date contact lists (including afte",
              type: "picklist",
              sequence: 217,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Vulnerability assessment conducted and p",
              type: "picklist",
              sequence: 218,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Where rework is used in the manufacturin",
              type: "picklist",
              sequence: 219,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Wholesalers",
              type: "picklist",
              sequence: 220,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "changes to specifications are clearly co",
              type: "picklist",
              sequence: 221,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "documented specifications are available",
              type: "picklist",
              sequence: 222,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "responsibility for controlling specifica",
              type: "picklist",
              sequence: 223,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "specifications are current and available",
              type: "picklist",
              sequence: 224,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
          ],
        },
        {
          name: "Comments Section",
          sequence: 3,
          fields: [
            {
              label: "Comments Administrationsupporthasbeenid",
              type: "textarea",
              sequence: 225,
            },
            {
              label: "Comments Adocumentedallergenmanagementp",
              type: "textarea",
              sequence: 226,
            },
            {
              label: "Comments Adocumentedcomplaintmanagement",
              type: "textarea",
              sequence: 227,
            },
            {
              label: "Comments Adocumentedcorrectiveactionpro",
              type: "textarea",
              sequence: 228,
            },
            {
              label: "Comments Adocumentedfoodrecallandwithdr",
              type: "textarea",
              sequence: 229,
            },
            {
              label: "Comments Adocumentedprogramisinplacetoc1",
              type: "textarea",
              sequence: 230,
            },
            {
              label: "Comments Adocumentedprogramisinplacetoc2",
              type: "textarea",
              sequence: 231,
            },
            {
              label: "Comments Adocumentedprogramisinplacetoc",
              type: "textarea",
              sequence: 232,
            },
            {
              label: "Comments Adocumentedsupplierapprovalpro",
              type: "textarea",
              sequence: 233,
            },
            {
              label: "Comments Afoodrecallcoordinatorandaback",
              type: "textarea",
              sequence: 234,
            },
            {
              label: "Comments Afoodrecallteamisappointed",
              type: "textarea",
              sequence: 235,
            },
            {
              label: "Comments Allergenriskmanagementandcontr",
              type: "textarea",
              sequence: 236,
            },
            {
              label: "Comments Allergensrequiredtobelabelledu",
              type: "textarea",
              sequence: 237,
            },
            {
              label: "Comments Allproductionfacilitiesaresecu",
              type: "textarea",
              sequence: 238,
            },
            {
              label: "Comments Analyticaltestinglaboratoriesc",
              type: "textarea",
              sequence: 239,
            },
            {
              label: "Comments Anapprovedsupplierlistismainta",
              type: "textarea",
              sequence: 240,
            },
            {
              label: "Comments Aprocessisinplacetoensurethata",
              type: "textarea",
              sequence: 241,
            },
            {
              label: "Comments Arecalltrainingprogramforother",
              type: "textarea",
              sequence: 242,
            },
            {
              label: "Comments Arecalltrainingprogramforstaff",
              type: "textarea",
              sequence: 243,
            },
            {
              label: "Comments Atestofthetraceabilitysystemis",
              type: "textarea",
              sequence: 244,
            },
            {
              label: "Comments Authoritytoapproveafoodrecall",
              type: "textarea",
              sequence: 245,
            },
            {
              label: "Comments BackupPositionandornameofperso1",
              type: "textarea",
              sequence: 246,
            },
            {
              label: "Comments Backuppositionandornameofperso",
              type: "textarea",
              sequence: 247,
            },
            {
              label: "Comments Businesshasadocumentedlistofal",
              type: "textarea",
              sequence: 248,
            },
            {
              label: "Comments Businesshasadocumentedlistofalc",
              type: "textarea",
              sequence: 249,
            },
            {
              label: "Comments Changestothefoodbusiness",
              type: "textarea",
              sequence: 250,
            },
            {
              label: "Comments Chemical",
              type: "textarea",
              sequence: 251,
            },
            {
              label: "Comments Chemicalriskmanagementandcontr",
              type: "textarea",
              sequence: 252,
            },
            {
              label: "Comments ClearProductspecificationsissu",
              type: "textarea",
              sequence: 253,
            },
            {
              label: "Comments Clearlabellingproceduresensure",
              type: "textarea",
              sequence: 254,
            },
            {
              label: "Comments Closingthefoodrecall",
              type: "textarea",
              sequence: 255,
            },
            {
              label: "Comments CommentsNewSupplieronboardingp",
              type: "textarea",
              sequence: 256,
            },
            {
              label: "Comments Communicationplanincluding",
              type: "textarea",
              sequence: 257,
            },
            {
              label: "Comments Communicationwithotherstakehol",
              type: "textarea",
              sequence: 258,
            },
            {
              label: "Comments Companyhasdocumentedhistoryofm",
              type: "textarea",
              sequence: 259,
            },
            {
              label: "Comments Companyspokespersonidentified",
              type: "textarea",
              sequence: 260,
            },
            {
              label: "Comments Companyspokespersonidentifieda",
              type: "textarea",
              sequence: 261,
            },
            {
              label: "Comments Consumercontactinformationincl",
              type: "textarea",
              sequence: 262,
            },
            {
              label: "Comments ConsumersupportgroupssuchasAll",
              type: "textarea",
              sequence: 263,
            },
            {
              label: "Comments Contactlistsforallkeystakehold",
              type: "textarea",
              sequence: 264,
            },
            {
              label: "Comments Contactsavailableforanyimporte",
              type: "textarea",
              sequence: 265,
            },
            {
              label: "Comments Controlsareinplacetoreduceorel",
              type: "textarea",
              sequence: 266,
            },
            {
              label: "Comments CorrectiveActionswithactiondat",
              type: "textarea",
              sequence: 267,
            },
            {
              label: "Comments Correctiveactionsiereleaserewo",
              type: "textarea",
              sequence: 268,
            },
            {
              label: "Comments CorrectiveandPreventativeactio",
              type: "textarea",
              sequence: 269,
            },
            {
              label: "Comments Currentlistofproductsbycustome",
              type: "textarea",
              sequence: 270,
            },
            {
              label: "Comments Customercontactinformationincl",
              type: "textarea",
              sequence: 271,
            },
            {
              label: "Comments Dataonforeignmatteroccurrencei1",
              type: "textarea",
              sequence: 272,
            },
            {
              label: "Comments Dataonforeignmatteroccurrencei2",
              type: "textarea",
              sequence: 273,
            },
            {
              label: "Comments Dataonforeignmatteroccurrencei",
              type: "textarea",
              sequence: 274,
            },
            {
              label: "Comments Decisiontorecallorwithdraw",
              type: "textarea",
              sequence: 275,
            },
            {
              label: "Comments Developmentandapprovalofkeymes",
              type: "textarea",
              sequence: 276,
            },
            {
              label: "Comments Distributers",
              type: "textarea",
              sequence: 277,
            },
            {
              label: "Comments Documentedcleaninganddisinfect",
              type: "textarea",
              sequence: 278,
            },
            {
              label: "Comments Documentedfoodsafetypolicywhic",
              type: "textarea",
              sequence: 279,
            },
            {
              label: "Comments Documentedprocessforconducting",
              type: "textarea",
              sequence: 280,
            },
            {
              label: "Comments Documentedprocessforidentifica",
              type: "textarea",
              sequence: 281,
            },
            {
              label: "Comments Documentedtrainingrecordsforre",
              type: "textarea",
              sequence: 282,
            },
            {
              label: "Comments DraftMediaRelease",
              type: "textarea",
              sequence: 283,
            },
            {
              label: "Comments DraftWebsitenotification",
              type: "textarea",
              sequence: 284,
            },
            {
              label: "Comments Draftfoodrecalladvertisementin",
              type: "textarea",
              sequence: 285,
            },
            {
              label: "Comments Externaladvisorsandsubjectmatt",
              type: "textarea",
              sequence: 286,
            },
            {
              label: "Comments Feedbackfromcustomers",
              type: "textarea",
              sequence: 287,
            },
            {
              label: "Comments Feedbackfromrecalltraining",
              type: "textarea",
              sequence: 288,
            },
            {
              label: "Comments Feedbackfromregulators",
              type: "textarea",
              sequence: 289,
            },
            {
              label: "Comments FoodRecallCoordinator",
              type: "textarea",
              sequence: 290,
            },
            {
              label: "Comments FoodRecallTeam",
              type: "textarea",
              sequence: 291,
            },
            {
              label: "Comments FoodSafetyTrainingisprovidedfo",
              type: "textarea",
              sequence: 292,
            },
            {
              label: "Comments FoodSafetyexpertisetoassistwit",
              type: "textarea",
              sequence: 293,
            },
            {
              label: "Comments Foodallergens",
              type: "textarea",
              sequence: 294,
            },
            {
              label: "Comments Foodrecallplanreferstoandmakes",
              type: "textarea",
              sequence: 295,
            },
            {
              label: "Comments Foodretrievaldisposal",
              type: "textarea",
              sequence: 296,
            },
            {
              label: "Comments Foodsafetyriskassessmentisdocu",
              type: "textarea",
              sequence: 297,
            },
            {
              label: "Comments Foodsafetytrainingincludescove",
              type: "textarea",
              sequence: 298,
            },
            {
              label: "Comments Foodsafetytrainingisevaluatedt",
              type: "textarea",
              sequence: 299,
            },
            {
              label: "Comments ForeignmatterPhysicalriskmanag",
              type: "textarea",
              sequence: 300,
            },
            {
              label: "Comments Foreignmatterdetectionsystemsa",
              type: "textarea",
              sequence: 301,
            },
            {
              label: "Comments Foreignmatterphysical",
              type: "textarea",
              sequence: 302,
            },
            {
              label: "Comments Fulltraceability100canbeachiev",
              type: "textarea",
              sequence: 303,
            },
            {
              label: "Comments GoodManufacturingPracticesGMP",
              type: "textarea",
              sequence: 304,
            },
            {
              label: "Comments GovernmentcontactinformationHo",
              type: "textarea",
              sequence: 305,
            },
            {
              label: "Comments Identificationassessmentofafoo",
              type: "textarea",
              sequence: 306,
            },
            {
              label: "Comments Identifyingdistributionofaffec",
              type: "textarea",
              sequence: 307,
            },
            {
              label: "Comments Identifyothermethodsofcommunic",
              type: "textarea",
              sequence: 308,
            },
            {
              label: "Comments Implementation",
              type: "textarea",
              sequence: 309,
            },
            {
              label: "Comments Insurancebroker",
              type: "textarea",
              sequence: 310,
            },
            {
              label: "Comments Internalauditsofthefoodsafetyp",
              type: "textarea",
              sequence: 311,
            },
            {
              label: "Comments KeyBusinessContacts",
              type: "textarea",
              sequence: 312,
            },
            {
              label: "Comments Legalexpertisetoassistwithasse",
              type: "textarea",
              sequence: 313,
            },
            {
              label: "Comments ManagementResponsibilityforthe",
              type: "textarea",
              sequence: 314,
            },
            {
              label: "Comments ManagementResponsibilityfortra",
              type: "textarea",
              sequence: 315,
            },
            {
              label: "Comments Managementcommitmenttofoodsafe",
              type: "textarea",
              sequence: 316,
            },
            {
              label: "Comments Manufacturinganddistributionfa",
              type: "textarea",
              sequence: 317,
            },
            {
              label: "Comments Memberofstaffidentifiedwithpri",
              type: "textarea",
              sequence: 318,
            },
            {
              label: "Comments Microbiological",
              type: "textarea",
              sequence: 319,
            },
            {
              label: "Comments Microbiologicalriskmanagementa",
              type: "textarea",
              sequence: 320,
            },
            {
              label: "Comments Mockrecalloutcomesreviewedbyth",
              type: "textarea",
              sequence: 321,
            },
            {
              label: "Comments Mockrecalltoincludeincomingmat",
              type: "textarea",
              sequence: 322,
            },
            {
              label: "Comments Monitoringofthefoodrecall",
              type: "textarea",
              sequence: 323,
            },
            {
              label: "Comments NATAaccreditedtestingfacilityo",
              type: "textarea",
              sequence: 324,
            },
            {
              label: "Comments NamecontactdetailsforFoodRecal",
              type: "textarea",
              sequence: 325,
            },
            {
              label: "Comments NamecontactdetailsforbackupFoo",
              type: "textarea",
              sequence: 326,
            },
            {
              label: "Comments Namesandcontactdetailsforkeyma",
              type: "textarea",
              sequence: 327,
            },
            {
              label: "Comments Namesandcontactdetailsforkeysi",
              type: "textarea",
              sequence: 328,
            },
            {
              label: "Comments Namesandcontactdetailsformembe",
              type: "textarea",
              sequence: 329,
            },
            {
              label: "Comments NewSupplieronboardingprocesses",
              type: "textarea",
              sequence: 330,
            },
            {
              label: "Comments NewSupplieronboardingprocesseswh",
              type: "textarea",
              sequence: 331,
            },
            {
              label: "Comments Newstaffareprovidedwithinducti",
              type: "textarea",
              sequence: 332,
            },
            {
              label: "Comments Nohistoryofregulatorynoncompli",
              type: "textarea",
              sequence: 333,
            },
            {
              label: "Comments Onlinesales",
              type: "textarea",
              sequence: 334,
            },
            {
              label: "Comments Outcomesofactualrecallsifany",
              type: "textarea",
              sequence: 335,
            },
            {
              label: "Comments OutcomesofannualMockrecalls",
              type: "textarea",
              sequence: 336,
            },
            {
              label: "Comments Outcomesofmockrecallsdocumente",
              type: "textarea",
              sequence: 337,
            },
            {
              label: "Comments PRCommunicationsagencyifappoin",
              type: "textarea",
              sequence: 338,
            },
            {
              label: "Comments Personalhygienerequirementsare",
              type: "textarea",
              sequence: 339,
            },
            {
              label: "Comments Personsinbusinesstonotifyabout",
              type: "textarea",
              sequence: 340,
            },
            {
              label: "Comments Personsresponsibleforfoodsafet",
              type: "textarea",
              sequence: 341,
            },
            {
              label: "Comments Positionandornameofpersonwitha1",
              type: "textarea",
              sequence: 342,
            },
            {
              label: "Comments Positionandornameofpersonwitha",
              type: "textarea",
              sequence: 343,
            },
            {
              label: "Comments Potentialcausesofcrosscontamin",
              type: "textarea",
              sequence: 344,
            },
            {
              label: "Comments Preferredsupplierortrustedtrad",
              type: "textarea",
              sequence: 345,
            },
            {
              label: "Comments Proceduresforapprovalandmonito",
              type: "textarea",
              sequence: 346,
            },
            {
              label: "Comments Processandresponsibilitiesforn1",
              type: "textarea",
              sequence: 347,
            },
            {
              label: "Comments Processandresponsibilitiesforn2",
              type: "textarea",
              sequence: 348,
            },
            {
              label: "Comments Processandresponsibilitiesforn3",
              type: "textarea",
              sequence: 349,
            },
            {
              label: "Comments Processandresponsibilitiesforn4",
              type: "textarea",
              sequence: 350,
            },
            {
              label: "Comments Processandresponsibilitiesforn5",
              type: "textarea",
              sequence: 351,
            },
            {
              label: "Comments Processandresponsibilitiesforn6",
              type: "textarea",
              sequence: 352,
            },
            {
              label: "Comments Processandresponsibilitiesforn",
              type: "textarea",
              sequence: 353,
            },
            {
              label: "Comments Processforaccountingforrecalle",
              type: "textarea",
              sequence: 354,
            },
            {
              label: "Comments Processforassessmentofapotenti",
              type: "textarea",
              sequence: 355,
            },
            {
              label: "Comments Processforcommunicatingtheterm",
              type: "textarea",
              sequence: 356,
            },
            {
              label: "Comments Processforconfirmingapprovalof",
              type: "textarea",
              sequence: 357,
            },
            {
              label: "Comments Processfordecidingwhethertorec",
              type: "textarea",
              sequence: 358,
            },
            {
              label: "Comments Processfordecisiononwhethertos",
              type: "textarea",
              sequence: 359,
            },
            {
              label: "Comments Processfordeterminingthescopeo",
              type: "textarea",
              sequence: 360,
            },
            {
              label: "Comments Processfordeterminingthetypeof",
              type: "textarea",
              sequence: 361,
            },
            {
              label: "Comments Processfordeterminingwhentoter",
              type: "textarea",
              sequence: 362,
            },
            {
              label: "Comments Processfordisposalofrecallprod",
              type: "textarea",
              sequence: 363,
            },
            {
              label: "Comments Processforinvestigationofthero",
              type: "textarea",
              sequence: 364,
            },
            {
              label: "Comments Processformonitoringtheprogres",
              type: "textarea",
              sequence: 365,
            },
            {
              label: "Comments ProcessforprovidingtheFinalRep",
              type: "textarea",
              sequence: 366,
            },
            {
              label: "Comments ProcessforprovidingtheInterimR",
              type: "textarea",
              sequence: 367,
            },
            {
              label: "Comments Processforreimbursementtoconsu",
              type: "textarea",
              sequence: 368,
            },
            {
              label: "Comments Processforretrievalofrecalledp1",
              type: "textarea",
              sequence: 369,
            },
            {
              label: "Comments Processforretrievalofrecalledp",
              type: "textarea",
              sequence: 370,
            },
            {
              label: "Comments Processforsegregationandstorag",
              type: "textarea",
              sequence: 371,
            },
            {
              label: "Comments Processtoseekadvicefromthehome",
              type: "textarea",
              sequence: 372,
            },
            {
              label: "Comments Procestotesttheeffectivenesso",
              type: "textarea",
              sequence: 373,
            },
            {
              label: "Comments Productdistributionlistdetaili",
              type: "textarea",
              sequence: 374,
            },
            {
              label: "Comments Productidentificationsysteminp",
              type: "textarea",
              sequence: 375,
            },
            {
              label: "Comments Productnotconsideredatargetfor",
              type: "textarea",
              sequence: 376,
            },
            {
              label: "Comments Productphotoswhichshowproductl",
              type: "textarea",
              sequence: 377,
            },
            {
              label: "Comments Productreleaseprocedureinplace",
              type: "textarea",
              sequence: 378,
            },
            {
              label: "Comments Producttestingprogramisaligned",
              type: "textarea",
              sequence: 379,
            },
            {
              label: "Comments Provisionforameetingroomforthe",
              type: "textarea",
              sequence: 380,
            },
            {
              label: "Comments Purchasedmaterialsandproductsm",
              type: "textarea",
              sequence: 381,
            },
            {
              label: "Comments Rawmaterialsincludingpackaging",
              type: "textarea",
              sequence: 382,
            },
            {
              label: "Comments RecallNotificationprocess",
              type: "textarea",
              sequence: 383,
            },
            {
              label: "Comments Recordsavailablefrompurchaseth",
              type: "textarea",
              sequence: 384,
            },
            {
              label: "Comments Recordsenablingproductidentifi",
              type: "textarea",
              sequence: 385,
            },
            {
              label: "Comments Recordsforapprovalofproductsag",
              type: "textarea",
              sequence: 386,
            },
            {
              label: "Comments Recordsofcodingonfinishedprodu",
              type: "textarea",
              sequence: 387,
            },
            {
              label: "Comments Recordsofcodingonincomingmater",
              type: "textarea",
              sequence: 388,
            },
            {
              label: "Comments Recordsoffinishedproductsandde",
              type: "textarea",
              sequence: 389,
            },
            {
              label: "Comments Regulatoryrequirementsrelatedt",
              type: "textarea",
              sequence: 390,
            },
            {
              label: "Comments ResponsibilitiesforFoodRecallt",
              type: "textarea",
              sequence: 391,
            },
            {
              label: "Comments Retailers",
              type: "textarea",
              sequence: 392,
            },
            {
              label: "Comments Riskandhazardassessment",
              type: "textarea",
              sequence: 393,
            },
            {
              label: "Comments Riskassessmentcoverscriticalfo",
              type: "textarea",
              sequence: 394,
            },
            {
              label: "Comments Riskassessmentidentifiesandasses",
              type: "textarea",
              sequence: 395,
            },
            {
              label: "Comments Supplierperformanceismonitored",
              type: "textarea",
              sequence: 396,
            },
            {
              label: "Comments Suppliersareauditedtofoodsafet",
              type: "textarea",
              sequence: 397,
            },
            {
              label: "Comments Supplierscontactinformationsho",
              type: "textarea",
              sequence: 398,
            },
            {
              label: "Comments Teamrolesandresponsibilitiesar",
              type: "textarea",
              sequence: 399,
            },
            {
              label: "Comments TheFoodIndustryGuidetoAllergen",
              type: "textarea",
              sequence: 400,
            },
            {
              label: "Comments Thebusinessfacilitiesarelocate",
              type: "textarea",
              sequence: 401,
            },
            {
              label: "Comments ThebusinesshasadocumentedGMPpo",
              type: "textarea",
              sequence: 402,
            },
            {
              label: "Comments Thefoodrecallplanhasbeenreview",
              type: "textarea",
              sequence: 403,
            },
            {
              label: "Comments Thefoodrecallplanhascleardocum",
              type: "textarea",
              sequence: 404,
            },
            {
              label: "Comments Thefoodrecallplanincludesachec",
              type: "textarea",
              sequence: 405,
            },
            {
              label: "Comments Thefoodrecallplanincludesrefer",
              type: "textarea",
              sequence: 406,
            },
            {
              label: "Comments Thefoodrecallplanisapprovedbyt",
              type: "textarea",
              sequence: 407,
            },
            {
              label: "Comments Thefoodrecallplanisavailableto",
              type: "textarea",
              sequence: 408,
            },
            {
              label: "Comments Thefoodrecallplanlistsdefiniti",
              type: "textarea",
              sequence: 409,
            },
            {
              label: "Comments Thefoodsafetyprogramisauditeda",
              type: "textarea",
              sequence: 410,
            },
            {
              label: "Comments Thepolicyiscommunicatedtoallst",
              type: "textarea",
              sequence: 411,
            },
            {
              label: "Comments Theproductrecallplanislinkedto",
              type: "textarea",
              sequence: 412,
            },
            {
              label: "Comments Thereisaprocessforestablishing",
              type: "textarea",
              sequence: 413,
            },
            {
              label: "Comments Thetraceabilitysystemistesteda",
              type: "textarea",
              sequence: 414,
            },
            {
              label: "Comments ThirdpartyWarehousestorage",
              type: "textarea",
              sequence: 415,
            },
            {
              label: "Comments Thirdpartycertificationbodies",
              type: "textarea",
              sequence: 416,
            },
            {
              label: "Comments Thirdpartycontractmanufactures",
              type: "textarea",
              sequence: 417,
            },
            {
              label: "Comments Threatassessmentconductedandpl",
              type: "textarea",
              sequence: 418,
            },
            {
              label: "Comments Traceabilitypossiblethroughmul",
              type: "textarea",
              sequence: 419,
            },
            {
              label: "Comments Traceabilityprocessregularlyte",
              type: "textarea",
              sequence: 420,
            },
            {
              label: "Comments Training",
              type: "textarea",
              sequence: 421,
            },
            {
              label: "Comments Trendanalysisofcomplaintsandco",
              type: "textarea",
              sequence: 422,
            },
            {
              label: "Comments Uptodatecontactlistsincludinga",
              type: "textarea",
              sequence: 423,
            },
            {
              label: "Comments Vulnerabilityassessmentconduct",
              type: "textarea",
              sequence: 424,
            },
            {
              label: "Comments Wherereworkisusedinthemanufact",
              type: "textarea",
              sequence: 425,
            },
            {
              label: "Comments Wholesalers",
              type: "textarea",
              sequence: 426,
            },
            {
              label: "Comments changestospecificationsareclea",
              type: "textarea",
              sequence: 427,
            },
            {
              label: "Comments documentedspecificationsareava",
              type: "textarea",
              sequence: 428,
            },
            {
              label: "Comments responsibilityforcontrollingsp",
              type: "textarea",
              sequence: 429,
            },
            {
              label: "Comments specificationsarecurrentandava",
              type: "textarea",
              sequence: 430,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = productSafetyAssessment;
