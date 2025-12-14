Re-render: Call the function again.
when we change state then it re-render the function.

Example: When setBg("orange") Then call the function again.
setBg re-render the function. means call again.
Allocation phir se hoga.
that orange will placed inside useState.
**Allocation of memory** happens again and color assigned to color.

NOTE: const variable are allocated memory a again.

- It dosen't render when value doesn't change.
- Preamitive two time if same.(beil out)
- In object,array it was reference so no re-render.
- Because react optimize.
- If it call again and again it consume memory take cpu cycle hence slow down.