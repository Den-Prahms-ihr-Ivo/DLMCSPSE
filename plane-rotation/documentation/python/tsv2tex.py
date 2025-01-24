from customTypes import Table

import pandas as pd
from typing import Optional


def format_cell(text: str, is_code: bool, is_tag: bool, color: Optional[str]) -> str:
    """
    TODO: bla bla bla
    """
    # E.G. One & abcdef ghjijklmn & & \tcbox[colframe=green, colback=green]{Passed}  \\ \hline

    if text == "DONE":
        color = "TAGgreen"
    elif text == "M2FR":
        color = "TAGred"
    elif text == "IN PROGRESS":
        color = "TAGyellow"
    elif text == "MEDIUM":
        color = "TAGyellow"
    elif text == "LOW":
        color = "TAGgray"
    elif text == "HIGH":
        color = "TAGred"

    if is_tag:
        c = "" if color is None else "[colframe=" + color + ", colback=" + color + "]"
        return "\\tcbox" + c + "{\\textbf{\\footnotesize " + text + "}}"

    if is_code:
        return "{\\color{purpleT}\\ttfamily " + text + "}"

    return text


def tsv2tex(table: Table, tsv_path: str, save_file: str):
    """
    TODO: bla bla bla
    """
    tmp = pd.read_csv(
        tsv_path,
        sep="\t",
        header=0,
    )

    tmp = tmp.sort_values(table["sort_vals"], ascending=table["asc"])
    cols = table["columns"]

    # ###############################################################################
    # Table Column Types
    # E.G. : "{|X|X|M{2cm}|M{1.8cm}|}"
    # ###############################################################################
    column_types = "{|"
    for _, col in enumerate(cols):
        column_types += col["column_type"]
        column_types += "|"
    column_types += "}"

    # ###############################################################################
    # Table Caption and Label
    # E.G. : "{|X|X|M{2cm}|M{1.8cm}|}"
    # ###############################################################################
    caption_and_label = (
        "\\caption*{" + table["title"] + "} \\label{tab:" + table["label"] + "} \\\\"
    )

    # ###############################################################################
    # Table Column Header
    # ###############################################################################
    table_column_header = "\\arrayrulecolor{linegray}\\hline "
    for i, col in enumerate(cols):
        if i < 1:
            table_column_header += "\\rowcolor{lightgray} \\multicolumn{1}{|c|}"
        else:
            table_column_header += "\\multicolumn{1}{c|}"

        table_column_header += "{\\color{default}\\textbf{"
        table_column_header += col["display_text"]
        table_column_header += "}}"

        if i == len(cols) - 1:
            # Last entry
            table_column_header += "\\\\ \\hline"
        else:
            table_column_header += " & "

    # ###############################################################################
    # Second Table Column Header for Page Breaks
    # ###############################################################################
    second_table_column_header = ""
    for i, col in enumerate(cols):
        if i < 1:
            second_table_column_header += "\\multicolumn{1}{|c|}"
        else:
            second_table_column_header += "\\multicolumn{1}{c|}"

        second_table_column_header += "{\\textbf{"
        second_table_column_header += col["display_text"]
        second_table_column_header += "}}"

        if i == len(cols) - 1:
            # Last entry
            second_table_column_header += "\\\\ \\hline \n"
        else:
            second_table_column_header += " & "

    # ###############################################################################
    # Table Content
    # ###############################################################################
    table_content = ""

    for index, row in tmp.iterrows():
        for i, col in enumerate(cols):
            if i > 0:
                table_content += " & "

            table_content += format_cell(
                text=row[col["id"]],
                is_code=col["is_code"],
                is_tag=col["is_tag"],
                color=row.get("Colour", None),
            )

            if i == len(cols) - 1 and index < len(tmp):
                table_content += " \\\\ \\hline \n  "

    final_table = (
        """
    \\bgroup
    \\def\\arraystretch{1.5}
    \\setlength\\arrayrulewidth{1.2pt}
    \\color{textgray}
    \\begin{xltabular}{\\textwidth}"""
        + column_types
        + "\n\n"
        + caption_and_label
        + "\n\n"
        + table_column_header
        + "\n\n \\endfirsthead \n \\multicolumn{"
        + str(len(cols))
        + "}{c}%\n{\\tablename\\ \\thetable{} -- continued from previous page} \\\\ \\hline "
        + second_table_column_header
        + "\\endhead \\hline \n"
        + "\\multicolumn{"
        + str(len(cols))
        + "}{|r|}{{Continued on next page}} \\\\ \\hline \n"
        + "\\endfoot\n\n"
        + "\\hline \n \\endlastfoot \n"
        + table_content
        + "\n"
        + "\\end{xltabular} \n \\egroup \n \\color{default}"
    )

    with open(save_file, "w") as text_file:
        text_file.write(final_table)
