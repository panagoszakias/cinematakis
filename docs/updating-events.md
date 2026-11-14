# Updating events

All screenings are listed in one file: [`data/events.json`](../data/events.json). You never need to edit the HTML pages to add or remove a screening.

- The **Events** page (Greek and English) shows all upcoming screenings, grouped by date.
- The **home page** shows only the next screening. That section stays hidden when there are no upcoming screenings.
- A screening disappears from the site automatically the day after its date. Dates are compared using Greek time.
- If the list is empty, visitors see "The schedule will be announced soon".

## The file format

An empty schedule looks like this:

```json
{
  "events": []
}
```

Each screening is one block inside the square brackets:

```json
{
  "date": "2026-07-18",
  "time": "21:30",
  "title": { "el": "Ο τίτλος της ταινίας", "en": "The film title" },
  "location": { "el": "Πλατεία Τσιντζίνας", "en": "Tsintzina square" },
  "note": { "el": "Φέρτε μια κουβέρτα!", "en": "Bring a blanket!" }
}
```

| Field | Required | Format |
|-------|----------|--------|
| `date` | yes | `YYYY-MM-DD`, for example `2026-07-18` |
| `time` | yes | 24-hour `HH:MM`, for example `21:30` |
| `title` | yes | Greek (`el`) and English (`en`) text |
| `location` | yes | Greek and English place name |
| `note` | no | Greek and English text. Leave the whole line out if you have no note |

An entry with a missing or badly formatted required field is skipped silently, so check the page after every change.

Two screenings in the same file are separated by a comma. There is **no comma after the last one**:

```json
{
  "events": [
    {
      "date": "2026-07-18",
      "time": "21:30",
      "title": { "el": "Ταινία Α", "en": "Film A" },
      "location": { "el": "Πλατεία Τσιντζίνας", "en": "Tsintzina square" }
    },
    {
      "date": "2026-07-25",
      "time": "21:30",
      "title": { "el": "Ταινία Β", "en": "Film B" },
      "location": { "el": "Αυλή του σχολείου", "en": "School courtyard" },
      "note": { "el": "Φέρτε μια κουβέρτα!", "en": "Bring a blanket!" }
    }
  ]
}
```

The order in the file does not matter. The site sorts by date and time.

## How to edit on the GitHub website (easiest)

1. Open <https://github.com/panagoszakias/cinematakis> and sign in.
2. Open the `data` folder, then `events.json`.
3. Click the pencil icon (Edit this file).
4. Add or change screenings. Keep the quotes, commas and brackets exactly as in the examples.
5. Click **Commit changes**, then **Commit changes** again. Writing a message such as "Add July screenings" is enough.
6. Wait a minute or two for the site to update, then check both the Greek and English Events pages.

## How to edit on your computer

1. Edit `data/events.json` in your editor.
2. Preview it (see the README, "How to preview locally").
3. Publish:

```
git add data/events.json
git commit -m "Update events"
git push
```

## If the page does not update

- Check for a missing or extra comma, or a missing quote. Paste the file into <https://jsonlint.com> to find the error. Do not paste anything private.
- Make sure dates are real and in the future. Past dates are hidden.
- Reload the page without the cache (Ctrl+F5).
- To undo a mistake on GitHub, open the file's **History** and revert to the previous version.
