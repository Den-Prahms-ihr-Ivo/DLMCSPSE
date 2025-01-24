from customTypes import Column, Table
from tsv2tex import tsv2tex


# ###############################################################################
# MILESTONES AND DEADLINES
# ###############################################################################

MandD_1: Column = {
    "id": "Milestone",
    "display_text": "Milestones and Deadlines",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}

Version: Column = {
    "id": "Version",
    "display_text": "Version",
    "is_tag": False,
    "is_code": False,
    "column_type": "M{1.8cm}",
}
Deadline: Column = {
    "id": "Deadline",
    "display_text": "Deadline",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{2.2cm}",
}
Status: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{2.6cm}",
}

MilestonesAndDeadlines: Table = {
    "id": 0,
    "title": "",
    "label": "Milestones and Deadlines",
    "columns": [MandD_1, Version, Deadline, Status],
    "sort_vals": ["Version"],
    "asc": [True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/MilestonesAndDeadlines.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/MilestonesAndDeadlines.tex"

tsv2tex(table=MilestonesAndDeadlines, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# CONCEPTION PHASE 1.3.1 Requirements - Non-Functional
# ###############################################################################

Requirement: Column = {
    "id": "Requirement",
    "display_text": "Requirement",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Scope: Column = {
    "id": "Scope",
    "display_text": "Scope",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

CONCEPTION_REQ_NON_FUNC: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Non-Functional",
    "columns": [Requirement, Scope],
    "sort_vals": ["Scope", "Requirement"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Concept-Req-NF.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Concept-Req-NF.tex"

tsv2tex(table=CONCEPTION_REQ_NON_FUNC, tsv_path=TSV, save_file=SAVE_FILE)

# ###############################################################################
# CONCEPTION PHASE 1.3.1 Requirements - Functional
# ###############################################################################

UserStory: Column = {
    "id": "User Story",
    "display_text": "User Story",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Scope_RF: Column = {
    "id": "Scope",
    "display_text": "Scope",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

CONCEPTION_REQ_FUNC: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Non-Functional",
    "columns": [UserStory, Scope_RF],
    "sort_vals": ["Scope", "User Story"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Concept-Req-F.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Concept-Req-F.tex"

tsv2tex(table=CONCEPTION_REQ_FUNC, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# IMPLEMENTATION PHASE 2.4 Requirements Refinement 2.4.1 Functional
# ###############################################################################

Requirement_2_4_1: Column = {
    "id": "Requirement",
    "display_text": "Requirement",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
User_Story_2_4_1: Column = {
    "id": "User Story",
    "display_text": "User Story",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Importance_2_4_1: Column = {
    "id": "Importance",
    "display_text": "Importance",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{1.8cm}",
}
Jira_2_4_1: Column = {
    "id": "Jira Issue",
    "display_text": "Jira Issue",
    "is_tag": False,
    "is_code": True,
    "column_type": "M{1.4cm}",
}
Status_2_4_1: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{1.3cm}",
}
Comp_2_4_1: Column = {
    "id": "Comp.",
    "display_text": "Comp.",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{2cm}",
}

REFINED_REQ_FUNC: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Functional",
    "columns": [
        Requirement_2_4_1,
        User_Story_2_4_1,
        Importance_2_4_1,
        Jira_2_4_1,
        Status_2_4_1,
    ],
    "sort_vals": ["Status", "Importance", "Jira Issue"],
    "asc": [True, True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Refined-Requirements-F.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Refined-Requirements-F.tex"

tsv2tex(table=REFINED_REQ_FUNC, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# IMPLEMENTATION PHASE 2.4 Requirements Refinement 2.4.1 Functional Technical
# ###############################################################################

Requirement_2_4_1_1: Column = {
    "id": "Requirement",
    "display_text": "Requirement",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Jira_2_4_1_1: Column = {
    "id": "Jira Issue",
    "display_text": "Jira Issue",
    "is_tag": False,
    "is_code": True,
    "column_type": "M{1.5cm}",
}
Status_2_4_1_1: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{1.5cm}",
}

REFINED_REQ_FUNC_TECH: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Functional Technical",
    "columns": [
        Requirement_2_4_1_1,
        Jira_2_4_1_1,
        Status_2_4_1_1,
    ],
    "sort_vals": ["Status", "Jira Issue", "Requirement"],
    "asc": [True, True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Refined-Requirements-FT.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Refined-Requirements-FT.tex"

tsv2tex(table=REFINED_REQ_FUNC_TECH, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# IMPLEMENTATION PHASE 2.4 Requirements Refinement 2.4.1 Functional Technical
# ###############################################################################

Requirement_2_4_2: Column = {
    "id": "Requirement",
    "display_text": "Requirement",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Importance_2_4_2: Column = {
    "id": "Importance",
    "display_text": "Importance",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{2cm}",
}
Status_2_4_2: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{2cm}",
}

REFINED_REQ_NON_FUNC_TECH: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Functional Technical",
    "columns": [
        Requirement_2_4_2,
        Importance_2_4_2,
        Status_2_4_2,
    ],
    "sort_vals": ["Status", "Importance"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Refined-Requirements-NF.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Refined-Requirements-NF.tex"

tsv2tex(table=REFINED_REQ_NON_FUNC_TECH, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# CONCEPTION PHASE 1.3 Requirements Non Functional
# ###############################################################################

Requirement_1_3: Column = {
    "id": "Requirement",
    "display_text": "Requirement",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Scope_1_3: Column = {
    "id": "Scope",
    "display_text": "Scope",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

REQ_NON_FUNC_1_3: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Non-Functional",
    "columns": [
        Requirement_1_3,
        Scope_1_3,
    ],
    "sort_vals": ["Scope", "Requirement"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/1.3-REQ-NF.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/1.3-REQ-NF.tex"

tsv2tex(table=REQ_NON_FUNC_1_3, tsv_path=TSV, save_file=SAVE_FILE)

# ###############################################################################
# CONCEPTION PHASE 1.3 Requirements Functional
# ###############################################################################

Requirement_1_3_F: Column = {
    "id": "User Story",
    "display_text": "User Story",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Scope_1_3_F: Column = {
    "id": "Scope",
    "display_text": "Scope",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

REQ_NON_FUNC_1_3_F: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Functional",
    "columns": [
        Requirement_1_3_F,
        Scope_1_3_F,
    ],
    "sort_vals": ["Scope", "User Story"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/1.3-REQ-F.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/1.3-REQ-F.tex"

tsv2tex(table=REQ_NON_FUNC_1_3_F, tsv_path=TSV, save_file=SAVE_FILE)


# ###############################################################################
# TEST PHASE 3.2 Manual Tests
# ###############################################################################

Manual_TC: Column = {
    "id": "Test Case",
    "display_text": "Test Case",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Manual_EO: Column = {
    "id": "Expected Outcome",
    "display_text": "Expected Outcome",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Manual_S: Column = {
    "id": "Satisfies",
    "display_text": "Satisfies",
    "is_tag": False,
    "is_code": True,
    "column_type": "M{3cm}",
}
Manual_Status: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

MANUAL_TESTS: Table = {
    "id": 0,
    "title": "",
    "label": "manual_tests",
    "columns": [Manual_TC, Manual_EO, Manual_S, Manual_Status],
    "sort_vals": ["Status", "Satisfies", "Test Case"],
    "asc": [True, True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Manual-Tests.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Manual-Tests.tex"

tsv2tex(table=MANUAL_TESTS, tsv_path=TSV, save_file=SAVE_FILE)

# ###############################################################################
# TEST PHASE 3.3 Math Tests
# ###############################################################################

Math_ID: Column = {
    "id": "ID",
    "display_text": "ID",
    "is_tag": False,
    "is_code": False,
    "column_type": "M{1.2cm}",
}
Manual_FM: Column = {
    "id": "Function/Method",
    "display_text": "Function/Method",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Manual_D: Column = {
    "id": "Description",
    "display_text": "Description",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Manual_C: Column = {
    "id": "Coverage",
    "display_text": "Coverage",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

MATH_TESTS: Table = {
    "id": 0,
    "title": "",
    "label": "math_functions",
    "columns": [Math_ID, Manual_FM, Manual_D, Manual_C],
    "sort_vals": ["Coverage", "ID"],
    "asc": [True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Math-Tests.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Math-Tests.tex"

tsv2tex(table=MATH_TESTS, tsv_path=TSV, save_file=SAVE_FILE)

# ###############################################################################
# TEST PHASE 3.3 Automated Tests
# ###############################################################################

Automated_TID: Column = {
    "id": "Test ID",
    "display_text": "Test ID",
    "is_tag": False,
    "is_code": False,
    "column_type": "M{1.2cm}",
}
Automated_ID: Column = {
    "id": "ID",
    "display_text": "ID",
    "is_tag": False,
    "is_code": False,
    "column_type": "M{1.2cm}",
}
Automated_TEST: Column = {
    "id": "Test",
    "display_text": "Test",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}
Automated_S: Column = {
    "id": "Satisfies",
    "display_text": "Satisfies",
    "is_tag": False,
    "is_code": True,
    "column_type": "M{1.8cm}",
}
Automated_STAUTS: Column = {
    "id": "Status",
    "display_text": "Status",
    "is_tag": True,
    "is_code": False,
    "column_type": "M{3cm}",
}

AUTOMATED_TESTS: Table = {
    "id": 0,
    "title": "",
    "label": "Requirements - Functional",
    "columns": [
        Automated_TID,
        Automated_ID,
        Automated_TEST,
        Automated_S,
        Automated_STAUTS,
    ],
    "sort_vals": ["Status", "ID", "Satisfies"],
    "asc": [True, True, True],
}

TSV = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Automated-Tests.tsv"
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Automated-Tests.tex"

tsv2tex(table=AUTOMATED_TESTS, tsv_path=TSV, save_file=SAVE_FILE)

# ###############################################################################
# Glossary
# ###############################################################################

Glossary_Term: Column = {
    "id": "Term",
    "display_text": "Term",
    "is_tag": False,
    "is_code": False,
    "column_type": "p{3cm}",
}
Glossary_Def: Column = {
    "id": "Definition",
    "display_text": "Definition",
    "is_tag": False,
    "is_code": False,
    "column_type": "X",
}

GLOSSARY: Table = {
    "id": 0,
    "title": "",
    "label": "Glossary",
    "columns": [
        Glossary_Term,
        Glossary_Def,
    ],
    "sort_vals": ["Term", "Definition"],
    "asc": [True, True],
}

TSV = (
    "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tables/Glossary.tsv"
)
SAVE_FILE = "/Users/ivo/Documents/Uni/DLMCSPSE/plane-rotation/documentation/tex/generatedTables/Glossary.tex"

tsv2tex(table=GLOSSARY, tsv_path=TSV, save_file=SAVE_FILE)
