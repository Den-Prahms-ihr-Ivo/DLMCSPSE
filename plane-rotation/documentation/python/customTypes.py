from typing import TypedDict, List

Column = TypedDict(
    "Column",
    {
        "id": str,
        "display_text": str,
        "is_tag": bool,
        "is_code": bool,
        "column_type": str,
    },
)

Table = TypedDict(
    "Table",
    {
        "id": int,
        "title": str,
        "label": str,
        "columns": List[Column],
        "sort_vals": List[str],
        "asc": List[bool],
    },
)
