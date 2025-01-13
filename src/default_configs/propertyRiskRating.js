const propertyRiskRating = {
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
              label: "Property Risk Rating Number",
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
              label: "Building",
              type: "reference",
              sequence: 4,
            },
            {
              label: "Date of Review",
              type: "date",
              sequence: 5,
            },
            {
              label: "Review By Name",
              type: "string",
              sequence: 6,
            },
            {
              label: "Review By",
              type: "reference",
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
              label: "Brigade Response",
              type: "picklist",
              sequence: 9,
              picklistValues: [
                {label: "Brigade response less than 5 mins", value: "Brigade response less than 5 mins"},
              ],
            },
            {
              label: "Business Continuity Planning",
              type: "picklist",
              sequence: 10,
              picklistValues: [
                {label:"BCPs regularly tested through scenarios (minimum every 2 years)",value:"BCPs regularly tested through scenarios (minimum every 2 years)"},
                {label: "Business continuity plans in place. Plans identifiy critical business activities and have realistic plans for reinstating critical business functions", value: "Business continuity plans in place. Plans identifiy critical business activities and have realistic plans for reinstating critical business functions"},
              ],
            },
            {
              label: "Category of storage based on AS2118",
              type: "picklist",
              sequence: 11,
              picklistValues: [
                {
                 
              
                  label:"Category 1 - Non combustible products, timber pallet, single layer cardboard",
          
                  value:"Category 1 - Non combustible products, timber pallet, single layer cardboard"
               },
               {
                 
              
                  label:"Category 2 - Non-combustible products, wooden crates, multiple layers of carboards",
          
                  value:"Category 2 - Non-combustible products, wooden crates, multiple layers of carboards"
               },
               {
                 
              
                  label:"Category 3 - Organic combustible products and packaging with less than 5% plastics",
          
                  value:"Category 3 - Organic combustible products and packaging with less than 5% plastics"
               },
               {
                 
              
                  label:"Category 4 - Category 1,2, and 3 with not more than 25% plastic or 15% polystyrene",
          
                  value:"Category 4 - Category 1,2, and 3 with not more than 25% plastic or 15% polystyrene"
               },
               {
                 
              
                  label:"Category 5 - Cartoned or uncartoned unexpanded plastics - not more than 40% expanded plastics",
          
                  value:"Category 5 - Cartoned or uncartoned unexpanded plastics - not more than 40% expanded plastics"
               },
               {
                  label:"Category 6 - Cartoned or uncartoned expanded plastics",
                  value:"Category 6 - Cartoned or uncartoned expanded plastics"
               }
              ],
            },
            {
              label: "Combustible dusts",
              type: "picklist",
              sequence: 12,
              picklistValues: [
                {label: "Hazardous area zoning and electrical equipment installed appropriate for the zone.", value: "Hazardous area zoning and electrical equipment installed appropriate for the zone."},
                {label: "Adequate housekeeping, dust collection equipment appropriate and well managed.", value: "Adequate housekeeping, dust collection equipment appropriate and well managed."},
              ],
            },
            {
              label: "Contingency",
              type: "picklist",
              sequence: 13,
              picklistValues: [
                {label : "Alternate production capability and capacity within the business mitigates any dependency risks.", value: "Alternate production capability and capacity within the business mitigates any dependency risks."},
                {label : "Alternate production capability and capacity of a third party mitigates any dependency risks.", value: "Alternate production capability and capacity of a third party mitigates any dependency risks."},
              ],
            },
            {
              label: "Contractor Management",
              type: "picklist",
              sequence: 14,
              picklistValues: [
                {label: "Contractor induction process and appropriate means for on site supervision of works.", value: "Contractor induction process and appropriate means for on site supervision of works."},
                {label: "Contractors approved prior to site entry and required to provide evidence of insurances and qualifications.", value: "Contractors approved prior to site entry and required to provide evidence of insurances and qualifications."},
              ],
            },
            {
              label: "Cooking or process heating",
              type: "picklist",
              sequence: 15,
              picklistValues: [
                {
                    label: "Cooking equipment fitted with suppression systems appropriately designed, fitted and regularly tested.",
                    value: "Cooking equipment fitted with suppression systems appropriately designed, fitted and regularly tested."
                },
                {
                    label: "Process safety interlocks included on cooking equipment including temperature monitoring with high temperature alarms and fail safe, thermostats in flues, flue penetrations appropriate.",
                    value: "Process safety interlocks included on cooking equipment including temperature monitoring with high temperature alarms and fail safe, thermostats in flues, flue penetrations appropriate."
                }
            ],
            
            },
            {
              label: "Customer Dependency",
              type: "picklist",
              sequence: 16,
              picklistValues: [
                {label : "Evidence that client has assessed the risk of critical customers and actively mitigated this risk through sales strategies, customer contracts and customer engagement processes", value: "Evidence that client has assessed the risk of critical customers and actively mitigated this risk through sales strategies, customer contracts and customer engagement processes"},
              ],
            },
            {
              label: "Dependency",
              type: "picklist",
              sequence: 17,
              picklistValues: [
                {label : "Where dependencies exist in the internal supply chain, the risk has been mitigated through outsourced capability to be called upon if necessary.", value: "Where dependencies exist in the internal supply chain, the risk has been mitigated through outsourced capability to be called upon if necessary."},
              ],
            },
            {
              label: "Electrical Security",
              type: "picklist",
              sequence: 18,
              picklistValues: [
                {label : "Intruder alarms in place and monitored offsite. CCTV systems in place.", value: "Intruder alarms in place and monitored offsite. CCTV systems in place."},
              ],
            },
            {
              label: "Electrical condition",
              type: "picklist",
              sequence: 19,
              picklistValues: [
                {label: "Physical inspection shows electrical cabling well organised, electrical switchroom free of storage, electrical cabinets clean.", value: "Physical inspection shows electrical cabling well organised, electrical switchroom free of storage, electrical cabinets clean."},
              ],
            },
            {
              label: "Electrical maintenance",
              type: "picklist",
              sequence: 20,
              picklistValues: [
                {
                    label: "Thermographic scanning conducted annually. Evidence that issues raised are addressed.",
                    value: "Thermographic scanning conducted annually. Evidence that issues raised are addressed."
                },
                {
                    label: "In house or contractor electricians familiar with the plant and conducting regular preventative maintenance on electrics.",
                    value: "In house or contractor electricians familiar with the plant and conducting regular preventative maintenance on electrics."
                }
            ],
            
            },
            {
              label: "Electrical protection",
              type: "picklist",
              sequence: 21,
              picklistValues: [
                {label: "Circuit breakers and RCDs in use, no ceramic fuses.", value: "Circuit breakers and RCDs in use, no ceramic fuses."},
              ],
            },
            {
              label: "Evidence of a commitment to risk managem",
              type: "picklist",
              sequence: 22,
              picklistValues: [
                {label: "Yes", value: "Yes"},
                {label: "No", value: "No"},
              ],
            },
            {
              label: "External Walls",
              type: "picklist",
              sequence: 23,
              picklistValues: [
                { label: "Poured insitu reinforced Concrete", value: "Poured insitu reinforced Concrete" },
                { label: "Pre-cast concrete", value: "Pre-cast concrete" },
                { label: "Metal", value: "Metal" },
                { label: "EPS", value: "EPS" },
                { label: "Approved ISP", value: "Approved ISP" },
                { label: "Concrete or masonry", value: "Concrete or masonry" },
                { label: "Metal cladding (insulated)", value: "Metal cladding (insulated)" },
                { label: "Brick or Masonry", value: "Brick or Masonry" },
                { label: "Brick Veneer", value: "Brick Veneer" },
                { label: "Glass and concrete", value: "Glass and concrete" },
                { label: "Glass", value: "Glass" },
                { label: "External cladding - non-combustible", value: "External cladding - non-combustible" },
                { label: "External cladding -combustible", value: "External cladding -combustible" }
            ],
            
            },
            {
              label: "Fire Detection",
              type: "picklist",
              sequence: 24,
              picklistValues: [
                { 
                    label: "Full coverage to AS1670, occupant warning system, off site monitoring.", 
                    value: "Full coverage to AS1670, occupant warning system, off site monitoring." 
                },
                { 
                    label: "Smoke alarms installed. Local alarms only. No off site monitoring.", 
                    value: "Smoke alarms installed. Local alarms only. No off site monitoring." 
                }
            ],
            
            },
            {
              label: "Fire System Maintenance",
              type: "picklist",
              sequence: 25,
              picklistValues: [
                { 
                    label: "Full maintenance with a fire statement certification made available", 
                    value: "Full maintenance with a fire statement certification made available" 
                },
                { 
                    label: "Maintenance conducted to AS1851 standard", 
                    value: "Maintenance conducted to AS1851 standard" 
                }
            ],
            
            },
            {
              label: "Flammable liquids and gases",
              type: "picklist",
              sequence: 26,
              picklistValues: [
                { 
                    label: "Flammable liquids and gases stored in appropriate cabinets or storage areas.", 
                    value: "Flammable liquids and gases stored in appropriate cabinets or storage areas." 
                },
                { 
                    label: "Flammable liquids and gases stored inappropriately.", 
                    value: "Flammable liquids and gases stored inappropriately." 
                }
              ],
            },
            {
              label: "Floor",
              type: "picklist",
              sequence: 27,
              picklistValues: [
                { label: "Concrete", value: "Concrete" },
                { label: "Timber", value: "Timber" },
                { label: "Carpet", value: "Carpet" },
                { label: "Tiles", value: "Tiles" }
            ],
            
            },
            {
              label: "Forklifts and charging bays",
              type: "picklist",
              sequence: 28,
              picklistValues: [
                { 
                    label: "Forklifts and charging bays located in designated areas with appropriate signage and charging stations", 
                    value: "Forklifts and charging bays located in designated areas with appropriate signage and charging stations" 
                },
                { 
                    label: "Forklifts and charging bays located inappropriately", 
                    value: "Forklifts and charging bays located inappropriately" 
                }
              ],
            },
            {
              label: "Hot work permit systems",
              type: "picklist",
              sequence: 29,
              picklistValues: [
                { 
                    label: "Hot work permit system in place and adhered to", 
                    value: "Hot work permit system in place and adhered to" 
                },
                { 
                    label: "Hot work permit system not in place", 
                    value: "Hot work permit system not in place" 
                }
              ],
            },
            {
              label: "Hydrant Systems",
              type: "picklist",
              sequence: 30,
              picklistValues: [
                { 
                    label: "Hydrant systems in place and tested regularly", 
                    value: "Hydrant systems in place and tested regularly" 
                },
                { 
                    label: "Hydrant systems in place but not tested regularly", 
                    value: "Hydrant systems in place but not tested regularly" 
                }
              ],
            },
            {
              label: "Internal Walls",
              type: "picklist",
              sequence: 31,
              picklistValues: [
                { label: "Concrete or masonry", value: "Concrete or masonry" },
                { label: "Metal or plasterboard", value: "Metal or plasterboard" },
                { label: "Approved ISP", value: "Approved ISP" },
                { label: "Plasterboard", value: "Plasterboard" },
                { label: "Metal", value: "Metal" },
                { label: "EPS", value: "EPS" }
            ],
            
            },
            {
              label: "Manned Security",
              type: "picklist",
              sequence: 32,
              picklistValues: [
                {label: "Manned security on site.", value: "Manned security on site."},
              ],
            },
            {
              label: "Physical Security",
              type: "picklist",
              sequence: 33,
              picklistValues: [
                {label: "Physical security in place.", value: "Physical security in place."},
              ],
            },
            {
              label: "Preventative Maintenance",
              type: "picklist",
              sequence: 34,
              picklistValues: [
                {label: "Preventative maintenance schedule in place.", value: "Preventative maintenance schedule in place."},
              ],
            },
            {
              label: "Ratio of NLE / MFL",
              type: "picklist",
              sequence: 35,
              picklistValues: [
                {label: "Ratio of NLE / MFL < 1", value: "Ratio of NLE / MFL < 1"},
              ],
            },
            {
              label: "Roof",
              type: "picklist",
              sequence: 36,
              picklistValues: [
                { label: "Metal", value: "Metal" },
                { label: "Concrete", value: "Concrete" },
                { label: "Tiles", value: "Tiles" },
                { label: "Asbestos", value: "Asbestos" },
                { label: "EPS", value: "EPS" },
                { label: "Approved ISP", value: "Approved ISP" },
                { label: "Slate", value: "Slate" },
                { label: "Fibreglass", value: "Fibreglass" },
                { label: "Other", value: "Other" },
              ],
            },
            {
              label: "Sprinkler Protection",
              type: "picklist",
              sequence: 37,
              picklistValues: [
                {label: "Sprinkler system in place and tested.", value: "Sprinkler system in place and tested."},
              ],
            },
            {
              label: "Structure",
              type: "picklist",
              sequence: 38,
              picklistValues: [
                { label: "Poured insitu reinforced Concrete", value: "Poured insitu reinforced Concrete" },
                { label: "Pre-cast concrete tilt slab with steel roof frame", value: "Pre-cast concrete tilt slab with steel roof frame" },
                { label: "Steel", value: "Steel" },
                { label: "Timber", value: "Timber" },
                { label: "Self supporting ISP", value: "Self supporting ISP" },
                { label: "Brick load bearing with timber frame", value: "Brick load bearing with timber frame" },
                { label: "Brick load bearing with steel frame", value: "Brick load bearing with steel frame" }
            ],
            
            },
            {
              label: "Supplier Dependency",
              type: "picklist",
              sequence: 39,
              picklistValues: [
                {label:"Evidence that client has assessed the risk of critical suppliers and actively mitigated this risk through vendor management processes", value:"Evidence that client has assessed the risk of critical suppliers and actively mitigated this risk through vendor management processes"},
              ],
            },
            {
              label: "Switchroom construction",
              type: "picklist",
              sequence: 40,
              picklistValues: [
                {label: "Switchroom construction meets AS3000 requirements.", value: "Switchroom construction meets AS3000 requirements"},
              ],
            },
            {
              label: "Water Supply",
              type: "picklist",
              sequence: 41,
              picklistValues: [
                {label: "Water supply available and tested.", value: "Water supply available and tested."},
              ],
            },
            {
              label: "Available Score BrigadeResponse",
              type: "double",
              sequence: 42,
            },
            {
              label: "Available Score BusinessContinuityPlanning",
              type: "double",
              sequence: 43,
            },
            {
              label: "Available Score CategoryofstoragebasedonAS",
              type: "double",
              sequence: 44,
            },
            {
              label: "Available Score Combustibledusts",
              type: "double",
              sequence: 45,
            },
            {
              label: "Available Score Contingency",
              type: "double",
              sequence: 46,
            },
            {
              label: "Available Score ContractorManagement",
              type: "double",
              sequence: 47,
            },
            {
              label: "Available Score Cookingorprocessheating",
              type: "double",
              sequence: 48,
            },
            {
              label: "Available Score CustomerDependency",
              type: "double",
              sequence: 49,
            },
            {
              label: "Available Score Dependency",
              type: "double",
              sequence: 50,
            },
            {
              label: "Available Score ElectricalSecurity",
              type: "double",
              sequence: 51,
            },
            {
              label: "Available Score Electricalcondition",
              type: "double",
              sequence: 52,
            },
            {
              label: "Available Score Electricalmaintenance",
              type: "double",
              sequence: 53,
            },
            {
              label: "Available Score Electricalprotection",
              type: "double",
              sequence: 54,
            },
            {
              label: "Available Score Evidenceofacommitmenttori",
              type: "double",
              sequence: 55,
            },
            {
              label: "Available Score ExternalWalls",
              type: "double",
              sequence: 56,
            },
            {
              label: "Available Score FireDetection",
              type: "double",
              sequence: 57,
            },
            {
              label: "Available Score FireSystemMaintenance",
              type: "double",
              sequence: 58,
            },
            {
              label: "Available Score Flammableliquidsandgases",
              type: "double",
              sequence: 59,
            },
            {
              label: "Available Score Floors",
              type: "double",
              sequence: 60,
            },
            {
              label: "Available Score Forkliftsandchargingbays",
              type: "double",
              sequence: 61,
            },
            {
              label: "Available Score Hotworkpermitsystems",
              type: "double",
              sequence: 62,
            },
            {
              label: "Available Score HydrantSystems",
              type: "double",
              sequence: 63,
            },
            {
              label: "Available Score InternalWalls",
              type: "double",
              sequence: 64,
            },
            {
              label: "Available Score MannedSecurity",
              type: "double",
              sequence: 65,
            },
            {
              label: "Available Score PhysicalSecurity",
              type: "double",
              sequence: 66,
            },
            {
              label: "Available Score PreventativeMaintenance",
              type: "double",
              sequence: 67,
            },
            {
              label: "Available Score RatioofNLEMFL",
              type: "double",
              sequence: 68,
            },
            {
              label: "Available Score Roof",
              type: "double",
              sequence: 69,
            },
            {
              label: "Available Score SprinklerProtection",
              type: "double",
              sequence: 70,
            },
            {
              label: "Available Score Structure",
              type: "double",
              sequence: 71,
            },
            {
              label: "Available Score SupplierDependency",
              type: "double",
              sequence: 72,
            },
            {
              label: "Available Score Switchroomconstruction",
              type: "double",
              sequence: 73,
            },
            {
              label: "Available Score WaterSupply",
              type: "double",
              sequence: 74,
            },
          ],
        },
        {
          name: "Scoring",
          sequence: 3,
          fields: [
            {
              label: "Individual Score BrigadeResponse",
              type: "double",
              sequence: 75,
            },
            {
              label: "Individual Score BusinessContinuityPlannin",
              type: "double",
              sequence: 76,
            },
            {
              label: "Individual Score CategoryofstoragebasedonA",
              type: "double",
              sequence: 77,
            },
            {
              label: "Individual Score Combustibledusts",
              type: "double",
              sequence: 78,
            },
            {
              label: "Individual Score Contingency",
              type: "double",
              sequence: 79,
            },
            {
              label: "Individual Score ContractorManagement",
              type: "double",
              sequence: 80,
            },
            {
              label: "Individual Score Cookingorprocessheating",
              type: "double",
              sequence: 81,
            },
            {
              label: "Individual Score CustomerDependency",
              type: "double",
              sequence: 82,
            },
            {
              label: "Individual Score Dependency",
              type: "double",
              sequence: 83,
            },
            {
              label: "Individual Score ElectricalSecurity",
              type: "double",
              sequence: 84,
            },
            {
              label: "Individual Score Electricalcondition",
              type: "double",
              sequence: 85,
            },
            {
              label: "Individual Score Electricalmaintenance",
              type: "double",
              sequence: 86,
            },
            {
              label: "Individual Score Electricalprotection",
              type: "double",
              sequence: 87,
            },
            {
              label: "Individual Score Evidenceofacommitmenttori",
              type: "double",
              sequence: 88,
            },
            {
              label: "Individual Score ExternalWalls",
              type: "double",
              sequence: 89,
            },
            {
              label: "Individual Score FireDetection",
              type: "double",
              sequence: 90,
            },
            {
              label: "Individual Score FireSystemMaintenance",
              type: "double",
              sequence: 91,
            },
            {
              label: "Individual Score Flammableliquidsandgases",
              type: "double",
              sequence: 92,
            },
            {
              label: "Individual Score Floors",
              type: "double",
              sequence: 93,
            },
            {
              label: "Individual Score Forkliftsandchargingbays",
              type: "double",
              sequence: 94,
            },
            {
              label: "Individual Score Hotworkpermitsystems",
              type: "double",
              sequence: 95,
            },
            {
              label: "Individual Score HydrantSystems",
              type: "double",
              sequence: 96,
            },
            {
              label: "Individual Score InternalWalls",
              type: "double",
              sequence: 97,
            },
            {
              label: "Individual Score MannedSecurity",
              type: "double",
              sequence: 98,
            },
            {
              label: "Individual Score PhysicalSecurity",
              type: "double",
              sequence: 99,
            },
            {
              label: "Individual Score PreventativeMaintenance",
              type: "double",
              sequence: 100,
            },
            {
              label: "Individual Score RatioofNLEMFL",
              type: "double",
              sequence: 101,
            },
            {
              label: "Individual Score Roof",
              type: "double",
              sequence: 102,
            },
            {
              label: "Individual Score SprinklerProtection",
              type: "double",
              sequence: 103,
            },
            {
              label: "Individual Score Structure",
              type: "double",
              sequence: 104,
            },
            {
              label: "Individual Score SupplierDependency",
              type: "double",
              sequence: 105,
            },
            {
              label: "Individual Score Switchroomconstruction",
              type: "double",
              sequence: 106,
            },
            {
              label: "Individual Score WaterSupply",
              type: "double",
              sequence: 107,
            },
            {
              label: "Max Weighted Score BusinessInterruption",
              type: "double",
              sequence: 108,
            },
            {
              label: "Max Weighted Score Construction",
              type: "double",
              sequence: 109,
            },
            {
              label: "Max Weighted Score Electrical",
              type: "double",
              sequence: 110,
            },
            {
              label: "Max Weighted Score FireProtection",
              type: "double",
              sequence: 111,
            },
            {
              label: "Max Weighted Score LossEstimates",
              type: "double",
              sequence: 112,
            },
            {
              label: "Max Weighted Score ManagementControls",
              type: "double",
              sequence: 113,
            },
            {
              label: "Max Weighted Score ProcessHazards",
              type: "double",
              sequence: 114,
            },
            {
              label: "Max Weighted Score RiskManagementApproach",
              type: "double",
              sequence: 115,
            },
            {
              label: "Max Weighted Score Security",
              type: "double",
              sequence: 116,
            },
            {
              label: "Max Weighted Score StorageHazard",
              type: "double",
              sequence: 117,
            },
            {
              label: "Score BusinessInterruption",
              type: "double",
              sequence: 118,
            },
            {
              label: "Score Construction",
              type: "double",
              sequence: 119,
            },
            {
              label: "Score Electrical",
              type: "double",
              sequence: 120,
            },
            {
              label: "Score FireProtection",
              type: "double",
              sequence: 121,
            },
            {
              label: "Score LossEstimates",
              type: "double",
              sequence: 122,
            },
            {
              label: "Score ManagementControls",
              type: "double",
              sequence: 123,
            },
            {
              label: "Score ProcessHazards",
              type: "double",
              sequence: 124,
            },
            {
              label: "Score RiskManagementApproach",
              type: "double",
              sequence: 125,
            },
            {
              label: "Score Security",
              type: "double",
              sequence: 126,
            },
            {
              label: "Score StorageHazard",
              type: "double",
              sequence: 127,
            },
            {
              label: "Total Max Weighted Score",
              type: "double",
              sequence: 128,
            },
            {
              label: "Total Weighted Score",
              type: "double",
              sequence: 129,
            },
            {
              label: "Weighted Score BusinessInterruption",
              type: "double",
              sequence: 130,
            },
            {
              label: "Weighted Score Construction",
              type: "double",
              sequence: 131,
            },
            {
              label: "Weighted Score Electrical",
              type: "double",
              sequence: 132,
            },
            {
              label: "Weighted Score FireProtection",
              type: "double",
              sequence: 133,
            },
            {
              label: "Weighted Score LossEstimates",
              type: "double",
              sequence: 134,
            },
            {
              label: "Weighted Score ManagementControls",
              type: "double",
              sequence: 135,
            },
            {
              label: "Weighted Score ProcessHazards",
              type: "double",
              sequence: 136,
            },
            {
              label: "Weighted Score RiskManagementApproach",
              type: "double",
              sequence: 137,
            },
            {
              label: "Weighted Score Security",
              type: "double",
              sequence: 138,
            },
            {
              label: "Weighted Score StorageHazard",
              type: "double",
              sequence: 139,
            },
          ],
        },
        {
          name: "Comments Section",
          sequence: 4,
          fields: [
            {
              label: "Comments BusinessInterruption",
              type: "textarea",
              sequence: 140,
            },
            {
              label: "Comments Construction",
              type: "textarea",
              sequence: 141,
            },
            {
              label: "Comments Electrical",
              type: "textarea",
              sequence: 142,
            },
            {
              label: "Comments FireProtection",
              type: "textarea",
              sequence: 143,
            },
            {
              label: "Comments LossEstimates",
              type: "textarea",
              sequence: 144,
            },
            {
              label: "Comments ManagementControls",
              type: "textarea",
              sequence: 145,
            },
            {
              label: "Comments ProcessHazards",
              type: "textarea",
              sequence: 146,
            },
            {
              label: "Comments RiskManagementApproach",
              type: "textarea",
              sequence: 147,
            },
            {
              label: "Comments Security",
              type: "textarea",
              sequence: 148,
            },
            {
              label: "Comments StorageHazard",
              type: "textarea",
              sequence: 149,
            },
          ],
        },
      ],
    },
  ],
};

module.exports = propertyRiskRating;
