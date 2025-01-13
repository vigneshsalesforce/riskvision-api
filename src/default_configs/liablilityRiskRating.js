const liabilityRiskRating = {
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
              label: "Liability Risk Rating Number",
              type: "string",
              sequence: 1,
            },
            {
              label: "Company",
              type: "reference",
              sequence: 2,
            },
            {
              label: "Date of Review",
              type: "date",
              sequence: 3,
            },
            {
              label: "Review By Name",
              type: "string",
              sequence: 4,
            },
            {
              label: "Review By",
              type: "reference",
              sequence: 5,
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
              sequence: 6,
            },
            {
              label: "Adequate Lighting",
              type: "picklist",
              sequence: 7,
              picklistValues: [],
            },
            {
              label: "Annual Fire Safety Compliance statement",
              type: "picklist",
              sequence: 8,
              picklistValues: [],
            },
            {
              label: "Appropriate food safety standards for fo",
              type: "picklist",
              sequence: 9,
              picklistValues: [],
            },
            {
              label: "Audit and Assurance programme",
              type: "picklist",
              sequence: 10,
              picklistValues: [],
            },
            {
              label: "Available Score AdequateLighting",
              type: "double",
              sequence: 11,
            },
            {
              label: "Available Score AnnualFireSafetyComplia",
              type: "double",
              sequence: 12,
            },
            {
              label: "Available Score Appropriatefoodsafetyst",
              type: "double",
              sequence: 13,
            },
            {
              label: "Available Score AuditandAssuranceprogra",
              type: "double",
              sequence: 14,
            },
            {
              label: "Available Score Cleaningprogrammeappropr",
              type: "double",
              sequence: 15,
            },
            {
              label: "Available Score CompetencyLicenceandQ",
              type: "double",
              sequence: 16,
            },
            {
              label: "Available Score Dangerousgoodshazardous",
              type: "double",
              sequence: 17,
            },
            {
              label: "Available Score EvidenceofContinuousimp",
              type: "double",
              sequence: 18,
            },
            {
              label: "Available Score EvidenceofPlantTaskbas",
              type: "double",
              sequence: 19,
            },
            {
              label: "Available Score Evidenceofprocessinpla",
              type: "double",
              sequence: 20,
            },
            {
              label: "Available Score Fallfromheighthazardsa",
              type: "double",
              sequence: 21,
            },
            {
              label: "Available Score Floorsurfacesincludings",
              type: "double",
              sequence: 22,
            },
            {
              label: "Available Score FormalRiskregistersinp",
              type: "double",
              sequence: 23,
            },
            {
              label: "Available Score Formalemergencymanagemen",
              type: "double",
              sequence: 24,
            },
            {
              label: "Available Score Formalprocesstorespondi",
              type: "double",
              sequence: 25,
            },
            {
              label: "Available Score GeneralHousekeeping",
              type: "double",
              sequence: 26,
            },
            {
              label: "Available Score Generalsafetyinductiond",
              type: "double",
              sequence: 27,
            },
            {
              label: "Available Score Hazardspresentareapprop",
              type: "double",
              sequence: 28,
            },
            {
              label: "Available Score Incidentmanagementproces",
              type: "double",
              sequence: 29,
            },
            {
              label: "Available Score Matureriskmanagementsys",
              type: "double",
              sequence: 30,
            },
            {
              label: "Available Score Permittoworksystems",
              type: "double",
              sequence: 31,
            },
            {
              label: "Available Score Processforreviewingeffe",
              type: "double",
              sequence: 32,
            },
            {
              label: "Available Score Restrictedaccessandsupe",
              type: "double",
              sequence: 33,
            },
            {
              label: "Available Score SWMSreviewedonsiteors",
              type: "double",
              sequence: 34,
            },
            {
              label: "Available Score SafetyDocumentationSWM",
              type: "double",
              sequence: 35,
            },
            {
              label: "Available Score Securitysystemstoanapp",
              type: "double",
              sequence: 36,
            },
            {
              label: "Available Score SiteSpecificfocusedona",
              type: "double",
              sequence: 37,
            },
            {
              label: "Available Score SlipResistantFlooringor",
              type: "double",
              sequence: 38,
            },
            {
              label: "Available Score Staffaretrainedtomanag",
              type: "double",
              sequence: 39,
            },
            {
              label: "Available Score UptodateCertificatesof",
              type: "double",
              sequence: 40,
            },
            {
              label: "Available Score Worksitekeptinasafem",
              type: "double",
              sequence: 41,
            },
            {
              label: "Cleaning programme appropriate for occup",
              type: "picklist",
              sequence: 42,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Competency - Licence and Qualifications",
              type: "picklist",
              sequence: 43,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Dangerous goods, hazardous materials are",
              type: "picklist",
              sequence: 44,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Evidence of Continuous improvement throu",
              type: "picklist",
              sequence: 45,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Evidence of Plant/Task based Risk Assess",
              type: "picklist",
              sequence: 46,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Evidence of process in place for Communi",
              type: "picklist",
              sequence: 47,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Fall from height hazards adequately prot",
              type: "picklist",
              sequence: 48,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Floor surfaces including steps and trans",
              type: "picklist",
              sequence: 49,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Formal Risk registers in-place either En",
              type: "picklist",
              sequence: 50,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Formal emergency management processes in",
              type: "picklist",
              sequence: 51,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Formal process to responding to spills",
              type: "picklist",
              sequence: 52,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "General Housekeeping",
              type: "picklist",
              sequence: 53,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "General safety induction delivered on si",
              type: "picklist",
              sequence: 54,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Hazards present are appropriately highli",
              type: "picklist",
              sequence: 55,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Incident management process in-place wit",
              type: "picklist",
              sequence: 56,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Mature risk management systems externall",
              type: "picklist",
              sequence: 57,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Permit to work systems",
              type: "picklist",
              sequence: 58,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Process for reviewing effectiveness of C",
              type: "picklist",
              sequence: 59,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Restricted access and supervision of thi",
              type: "picklist",
              sequence: 60,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "SWMS reviewed on-site or similar risk as",
              type: "picklist",
              sequence: 61,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Safety Documentation - SWMS, SMP, JSA, W",
              type: "picklist",
              sequence: 62,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Security systems to an appropriate stand",
              type: "picklist",
              sequence: 63,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Site Specific focused on any high risk a",
              type: "picklist",
              sequence: 64,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Slip Resistant Flooring or Slip Protecti",
              type: "picklist",
              sequence: 65,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Staff are trained to manage occupational",
              type: "picklist",
              sequence: 66,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Up to date Certificates of Currency (i.e",
              type: "picklist",
              sequence: 67,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
            {
              label: "Work site kept in a safe manner",
              type: "picklist",
              sequence: 68,
              picklistValues: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ],
            },
          ],
        },
        {
          name: "Scoring",
          sequence: 3,
          fields: [
            {
              label: "Individual Score AdequateLighting",
              type: "double",
              sequence: 69,
            },
            {
              label: "Individual Score AnnualFireSafetyCompli",
              type: "double",
              sequence: 70,
            },
            {
              label: "Individual Score Appropriatefoodsafetys",
              type: "double",
              sequence: 71,
            },
            {
              label: "Individual Score AuditandAssuranceprogr",
              type: "double",
              sequence: 72,
            },
            {
              label: "Individual Score Cleaningprogrammeapprop",
              type: "double",
              sequence: 73,
            },
            {
              label: "Individual Score CompetencyLicenceand",
              type: "double",
              sequence: 74,
            },
            {
              label: "Individual Score Dangerousgoodshazardou",
              type: "double",
              sequence: 75,
            },
            {
              label: "Individual Score EvidenceofContinuousim",
              type: "double",
              sequence: 76,
            },
            {
              label: "Individual Score EvidenceofPlantTaskba",
              type: "double",
              sequence: 77,
            },
            {
              label: "Individual Score Evidenceofprocessinpl",
              type: "double",
              sequence: 78,
            },
            {
              label: "Individual Score Fallfromheighthazards",
              type: "double",
              sequence: 79,
            },
            {
              label: "Individual Score Floorsurfacesincluding",
              type: "double",
              sequence: 80,
            },
            {
              label: "Individual Score FormalRiskregistersin",
              type: "double",
              sequence: 81,
            },
            {
              label: "Individual Score Formalemergencymanageme",
              type: "double",
              sequence: 82,
            },
            {
              label: "Individual Score Formalprocesstorespond",
              type: "double",
              sequence: 83,
            },
            {
              label: "Individual Score GeneralHousekeeping",
              type: "double",
              sequence: 84,
            },
            {
              label: "Individual Score Generalsafetyinduction",
              type: "double",
              sequence: 85,
            },
            {
              label: "Individual Score Hazardspresentareappro",
              type: "double",
              sequence: 86,
            },
            {
              label: "Individual Score Incidentmanagementproce",
              type: "double",
              sequence: 87,
            },
            {
              label: "Individual Score Matureriskmanagementsy",
              type: "double",
              sequence: 88,
            },
            {
              label: "Individual Score Permittoworksystems",
              type: "double",
              sequence: 89,
            },
            {
              label: "Individual Score Processforreviewingeff",
              type: "double",
              sequence: 90,
            },
            {
              label: "Individual Score Restrictedaccessandsup",
              type: "double",
              sequence: 91,
            },
            {
              label: "Individual Score SWMSreviewedonsiteor",
              type: "double",
              sequence: 92,
            },
            {
              label: "Individual Score SafetyDocumentationSW",
              type: "double",
              sequence: 93,
            },
            {
              label: "Individual Score Securitysystemstoanap",
              type: "double",
              sequence: 94,
            },
            {
              label: "Individual Score SiteSpecificfocusedon",
              type: "double",
              sequence: 95,
            },
            {
              label: "Individual Score SlipResistantFlooringo",
              type: "double",
              sequence: 96,
            },
            {
              label: "Individual Score Staffaretrainedtomana",
              type: "double",
              sequence: 97,
            },
            {
              label: "Individual Score UptodateCertificateso",
              type: "double",
              sequence: 98,
            },
            {
              label: "Individual Score Worksitekeptinasafe",
              type: "double",
              sequence: 99,
            },
            {
              label: "Max Weighted Score ContractorandLabourHireM",
              type: "double",
              sequence: 100,
            },
            {
              label: "Max Weighted Score InternalRiskManagement",
              type: "double",
              sequence: 101,
            },
            {
              label: "Max Weighted Score PublicSafety",
              type: "double",
              sequence: 102,
            },
            {
              label: "Score ContractorandLabourHireManagement",
              type: "double",
              sequence: 103,
            },
            {
              label: "Score InternalRiskManagement",
              type: "double",
              sequence: 104,
            },
            {
              label: "Score PublicSafety",
              type: "double",
              sequence: 105,
            },
            {
              label: "Total - Max Weighted Score",
              type: "double",
              sequence: 106,
            },
            {
              label: "Total - Weighted Score",
              type: "double",
              sequence: 107,
            },
            {
              label: "Weighted Score ContractorandLabourHireMana",
              type: "double",
              sequence: 108,
            },
            {
              label: "Weighted Score InternalRiskManagement",
              type: "double",
              sequence: 109,
            },
            {
              label: "Weighted Score PublicSafety",
              type: "double",
              sequence: 110,
            },
          ],
        },
        {
          name: "Comments Section",
          sequence: 4,
          fields: [
            {
              label: "Comments ContractorandLabourHireManagemen",
              type: "textarea",
              sequence: 111,
            },
            {
              label: "Comments InternalRiskManagement",
              type: "textarea",
              sequence: 112,
            },
            {
              label: "Comments PublicSafety",
              type: "textarea",
              sequence: 113,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = liabilityRiskRating;