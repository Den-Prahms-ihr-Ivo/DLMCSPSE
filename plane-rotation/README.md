## Python-Files

All python files in this repository are used to create visually pleasing latex tables for the documentation from the requirements that were exported as a `.tsv`-file from a Google-Spreadsheet.

### Usage

1. Define the table by providing an instance of the `Table` datatype and fill it with instances of `Column`s.
2. Provide a valid path to a fitting `.tsv`-file and specify the output location.

I couldn't justify to spend more time on it, therefore all paths are hardcoded and not customisable via a config-file.
On my machine the workflow is as follows, assuming we currently are in the `python` folder:

1. activate the virtual environment. `source venv/bin/activate`
2. run `python main.py`, to create the latex files from the tsv data.
3. `cd` to the latex folder and run: `biber main` and `lualatex -interaction=nonstopmode main.tex`.
4. Done.
