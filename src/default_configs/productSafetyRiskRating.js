const productSafetyRiskRating = {
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
              label: "Product Safety Risk Rating Number",
              type: "string",
              sequence: 1,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 2,
            },
            {
              label: "Company Name",
              type: "string",
              sequence: 3,
            },
            {
              label: "Date of Review",
              type: "date",
              sequence: 4,
            },
            {
              label: "Review By Name",
              type: "string",
              sequence: 5,
            },
            {
              label: "Review By",
              type: "reference",
              sequence: 6,
            },
            {
              label: "What was the date of the last survey",
              type: "date",
              sequence: 7,
            },
          ],
        },
        {
          name: "Risk Assessment Details",
          sequence: 2,
          fields: [
            {
              label: "AS IS Risk Rating",
              type: "string",
              sequence: 8,
            },
            {
              label: "Allergen",
              type: "picklist",
              sequence: 9,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Analysing complaint trends and identifyi",
              type: "picklist",
              sequence: 10,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Available Score Allergen",
              type: "double",
              sequence: 11,
            },
            {
              label: "Available Score Analysingcomplainttrends",
              type: "double",
              sequence: 12,
            },
            {
              label: "Available Score Barcodingorsimilarprod",
              type: "double",
              sequence: 13,
            },
            {
              label: "Available Score ClearProductspecifications",
              type: "double",
              sequence: 14,
            },
            {
              label: "Available Score ComplaintsManagementproc",
              type: "double",
              sequence: 15,
            },
            {
              label: "Available Score Contamination",
              type: "double",
              sequence: 16,
            },
            {
              label: "Available Score CorrectiveandPreventativ",
              type: "double",
              sequence: 17,
            },
            {
              label: "Available Score CrisisManagementPlansin",
              type: "double",
              sequence: 18,
            },
            {
              label: "Available Score Dedicatedrolereponsib",
              type: "double",
              sequence: 19,
            },
            {
              label: "Available Score FoodSafetyTrainingfora",
              type: "double",
              sequence: 20,
            },
            {
              label: "Available Score Foodsafetysystemscertif",
              type: "double",
              sequence: 21,
            },
            {
              label: "Available Score Foodsafetysystemsinplace",
              type: "double",
              sequence: 22,
            },
            {
              label: "Available Score ForeignMatter",
              type: "double",
              sequence: 23,
            },
            {
              label: "Available Score Formalthirdpartyauditp",
              type: "double",
              sequence: 24,
            },
            {
              label: "Available Score GS1Recallinuse",
              type: "double",
              sequence: 25,
            },
            {
              label: "Available Score Labelling",
              type: "double",
              sequence: 26,
            },
            {
              label: "Available Score Managementcommitmenttof",
              type: "double",
              sequence: 27,
            },
            {
              label: "Available Score Microbiological",
              type: "double",
              sequence: 28,
            },
            {
              label: "Available Score Mockrecallsconductedann",
              type: "double",
              sequence: 29,
            },
            {
              label: "Available Score NATAaccreditedtestingfa",
              type: "double",
              sequence: 30,
            },
            {
              label: "Available Score NewSupplieronboardingpr",
              type: "double",
              sequence: 31,
            },
            {
              label: "Available Score Personsresponsibleforfo",
              type: "double",
              sequence: 32,
            },
            {
              label: "Available Score Productnotconsideredat",
              type: "double",
              sequence: 33,
            },
            {
              label: "Available Score Producttestingprogramal",
              type: "double",
              sequence: 34,
            },
            {
              label: "Available Score Recallcoordinatortraine",
              type: "double",
              sequence: 35,
            },
            {
              label: "Available Score Recallplanreviewedregu",
              type: "double",
              sequence: 36,
            },
            {
              label: "Available Score Riskassessmentclearlyid",
              type: "double",
              sequence: 37,
            },
            {
              label: "Available Score Riskassessmentcoverscri",
              type: "double",
              sequence: 38,
            },
            {
              label: "Available Score RiskassessmentsuchasH",
              type: "double",
              sequence: 39,
            },
            {
              label: "Available Score SiteSecuritytoanappro",
              type: "double",
              sequence: 40,
            },
            {
              label: "Available Score Supplierauditprocessrel",
              type: "double",
              sequence: 41,
            },
            {
              label: "Available Score Threatassessmentconducte",
              type: "double",
              sequence: 42,
            },
            {
              label: "Available Score Traceabilitypossiblethro",
              type: "double",
              sequence: 43,
            },
            {
              label: "Available Score Traceabilityprocessregul",
              type: "double",
              sequence: 44,
            },
            {
              label: "Available Score Vulnerabilityassessmentc",
              type: "double",
              sequence: 45,
            },
            {
              label: "Bar coding or similar product identifica",
              type: "picklist",
              sequence: 46,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Clear Product specifications issued and",
              type: "picklist",
              sequence: 47,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Complaints Management process",
              type: "picklist",
              sequence: 48,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Contamination",
              type: "picklist",
              sequence: 49,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Corrective and Preventative actions",
              type: "picklist",
              sequence: 50,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Crisis Management Plans in place",
              type: "picklist",
              sequence: 51,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Dedicated role(s) reponsibility for food",
              type: "picklist",
              sequence: 52,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food Safety Training for all relevant st",
              type: "picklist",
              sequence: 53,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food safety systems certified to accepta",
              type: "picklist",
              sequence: 54,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Food safety systems in place",
              type: "picklist",
              sequence: 55,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Foreign Matter",
              type: "picklist",
              sequence: 56,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Formal third party audit program",
              type: "picklist",
              sequence: 57,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "GS1 Recall in-use",
              type: "picklist",
              sequence: 58,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Labelling",
              type: "picklist",
              sequence: 59,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Management commitment to food safety & q",
              type: "picklist",
              sequence: 60,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Microbiological",
              type: "picklist",
              sequence: 61,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Mock recalls conducted annually with evi",
              type: "picklist",
              sequence: 62,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "NATA accredited testing facility (or equ",
              type: "picklist",
              sequence: 63,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "New Supplier onboarding processes that a",
              type: "picklist",
              sequence: 64,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Persons responsible for food safety have",
              type: "picklist",
              sequence: 65,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product not considered a target for MPT,",
              type: "picklist",
              sequence: 66,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Product testing program aligned to HACCP",
              type: "picklist",
              sequence: 67,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Recall co-ordinator trained",
              type: "picklist",
              sequence: 68,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Recall plan reviewed regularly and cont",
              type: "picklist",
              sequence: 69,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk assessment clearly identifies the m",
              type: "picklist",
              sequence: 70,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk assessment covers critical food saf",
              type: "picklist",
              sequence: 71,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Risk assessment, such as HACCP plan, doc",
              type: "picklist",
              sequence: 72,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Site Security to an appropriate standard",
              type: "picklist",
              sequence: 73,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Supplier audit process relevant to the e",
              type: "picklist",
              sequence: 74,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Threat assessment conducted and plans in",
              type: "picklist",
              sequence: 75,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Traceability possible through multiple s",
              type: "picklist",
              sequence: 76,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Traceability process regularly tested",
              type: "picklist",
              sequence: 77,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
            {
              label: "Vulnerability assessment conducted and p",
              type: "picklist",
              sequence: 78,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "N/A", value: "N/A" },
              ],
            },
          ],
        },
        {
          name: "Scoring",
          sequence: 3,
          fields: [
            {
              label: "Individual Score Allergen",
              type: "double",
              sequence: 79,
            },
            {
              label: "Individual Score Analysingcomplainttrend",
              type: "double",
              sequence: 80,
            },
            {
              label: "Individual Score Barcodingorsimilarpro",
              type: "double",
              sequence: 81,
            },
            {
              label: "Individual Score ClearProductspecificati",
              type: "double",
              sequence: 82,
            },
            {
              label: "Individual Score ComplaintsManagementpro",
              type: "double",
              sequence: 83,
            },
            {
              label: "Individual Score Contamination",
              type: "double",
              sequence: 84,
            },
            {
              label: "Individual Score CorrectiveandPreventati",
              type: "double",
              sequence: 85,
            },
            {
              label: "Individual Score CrisisManagementPlansi",
              type: "double",
              sequence: 86,
            },
            {
              label: "Individual Score Dedicatedrolesreponsi",
              type: "double",
              sequence: 87,
            },
            {
              label: "Individual Score FoodSafetyTrainingfor",
              type: "double",
              sequence: 88,
            },
            {
              label: "Individual Score Foodsafetysystemscerti",
              type: "double",
              sequence: 89,
            },
            {
              label: "Individual Score Foodsafetysystemsinpl",
              type: "double",
              sequence: 90,
            },
            {
              label: "Individual Score ForeignMatter",
              type: "double",
              sequence: 91,
            },
            {
              label: "Individual Score Formalthirdpartyaudit",
              type: "double",
              sequence: 92,
            },
            {
              label: "Individual Score GS1Recallinuse",
              type: "double",
              sequence: 93,
            },
            {
              label: "Individual Score Labelling",
              type: "double",
              sequence: 94,
            },
            {
              label: "Individual Score Managementcommitmentto",
              type: "double",
              sequence: 95,
            },
            {
              label: "Individual Score Microbiological",
              type: "double",
              sequence: 96,
            },
            {
              label: "Individual Score Mockrecallsconductedan",
              type: "double",
              sequence: 97,
            },
            {
              label: "Individual Score NATAaccreditedtestingf",
              type: "double",
              sequence: 98,
            },
            {
              label: "Individual Score NewSupplieronboardingp",
              type: "double",
              sequence: 99,
            },
            {
              label: "Individual Score Personsresponsibleforf",
              type: "double",
              sequence: 100,
            },
            {
              label: "Individual Score Productnotconsidereda",
              type: "double",
              sequence: 101,
            },
            {
              label: "Individual Score Producttestingprograma",
              type: "double",
              sequence: 102,
            },
            {
              label: "Individual Score Recallcoordinatortrain",
              type: "double",
              sequence: 103,
            },
            {
              label: "Individual Score Recallplanreviewedreg",
              type: "double",
              sequence: 104,
            },
            {
              label: "Individual Score Riskassessmentclearlyi",
              type: "double",
              sequence: 105,
            },
            {
              label: "Individual Score Riskassessmentcoverscr",
              type: "double",
              sequence: 106,
            },
            {
              label: "Individual Score Riskassessmentsuchas",
              type: "double",
              sequence: 107,
            },
            {
              label: "Individual Score SiteSecuritytoanappro",
              type: "double",
              sequence: 108,
            },
            {
              label: "Individual Score Supplierauditprocessre",
              type: "double",
              sequence: 109,
            },
            {
              label: "Individual Score Threatassessmentconduct",
              type: "double",
              sequence: 110,
            },
            {
              label: "Individual Score Traceabilitypossiblethr",
              type: "double",
              sequence: 111,
            },
            {
              label: "Individual Score Traceabilityprocessregu",
              type: "double",
              sequence: 112,
            },
            {
              label: "Individual Score Vulnerabilityassessment",
              type: "double",
              sequence: 113,
            },
            {
              label: "Max Weighted Score ContinuousImprovement",
              type: "double",
              sequence: 114,
            },
            {
              label: "Max Weighted Score FoodSafetySystems",
              type: "double",
              sequence: 115,
            },
            {
              label: "Max Weighted Score MaliciousProductTamper",
              type: "double",
              sequence: 116,
            },
            {
              label: "Max Weighted Score ProductTesting",
              type: "double",
              sequence: 117,
            },
            {
              label: "Max Weighted Score QAResource",
              type: "double",
              sequence: 118,
            },
            {
              label: "Max Weighted Score RecallReadiness",
              type: "double",
              sequence: 119,
            },
            {
              label: "Max Weighted Score RiskAssessmentHACCP",
              type: "double",
              sequence: 120,
            },
            {
              label: "Max Weighted Score SupplierAssurance",
              type: "double",
              sequence: 121,
            },
            {
              label: "Max Weighted Score Traceability",
              type: "double",
              sequence: 122,
            },
            {
              label: "Score ContinuousImprovement",
              type: "double",
              sequence: 123,
            },
            {
              label: "Score FoodSafetySystems",
              type: "double",
              sequence: 124,
            },
            {
              label: "Score MaliciousProductTamper",
              type: "double",
              sequence: 125,
            },
            {
              label: "Score ProductTesting",
              type: "double",
              sequence: 126,
            },
            {
              label: "Score QAResource",
              type: "double",
              sequence: 127,
            },
            {
              label: "Score RecallReadiness",
              type: "double",
              sequence: 128,
            },
            {
              label: "Score RiskAssessmentHACCP",
              type: "double",
              sequence: 129,
            },
            {
              label: "Score SupplierAssurance",
              type: "double",
              sequence: 130,
            },
            {
              label: "Score Traceability",
              type: "double",
              sequence: 131,
            },
            {
              label: "Total Max Weighted Score",
              type: "double",
              sequence: 132,
            },
            {
              label: "Total Weighted Score",
              type: "double",
              sequence: 133,
            },
            {
              label: "Weighted Score ContinuousImprovement",
              type: "double",
              sequence: 134,
            },
            {
              label: "Weighted Score FoodSafetySystems",
              type: "double",
              sequence: 135,
            },
            {
              label: "Weighted Score MaliciousProductTamper",
              type: "double",
              sequence: 136,
            },
            {
              label: "Weighted Score ProductTesting",
              type: "double",
              sequence: 137,
            },
            {
              label: "Weighted Score QAResource",
              type: "double",
              sequence: 138,
            },
            {
              label: "Weighted Score RecallReadiness",
              type: "double",
              sequence: 139,
            },
            {
              label: "Weighted Score RiskAssessmentHACCP",
              type: "double",
              sequence: 140,
            },
            {
              label: "Weighted Score SupplierAssurance",
              type: "double",
              sequence: 141,
            },
            {
              label: "Weighted Score Traceability",
              type: "double",
              sequence: 142,
            },
          ],
        },
        {
          name: "Comments Section",
          sequence: 4,
          fields: [
            {
              label: "Comments ContinuousImprovement",
              type: "textarea",
              sequence: 143,
            },
            {
              label: "Comments FoodSafetySystems",
              type: "textarea",
              sequence: 144,
            },
            {
              label: "Comments MaliciousProductTamper",
              type: "textarea",
              sequence: 145,
            },
            {
              label: "Comments ProductTesting",
              type: "textarea",
              sequence: 146,
            },
            {
              label: "Comments QAResource",
              type: "textarea",
              sequence: 147,
            },
            {
              label: "Comments RecallReadiness",
              type: "textarea",
              sequence: 148,
            },
            {
              label: "Comments RiskAssessmentHACCP",
              type: "textarea",
              sequence: 149,
            },
            {
              label: "Comments SupplierAssurance",
              type: "textarea",
              sequence: 150,
            },
            {
              label: "Comments Traceability",
              type: "textarea",
              sequence: 151,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = productSafetyRiskRating;
