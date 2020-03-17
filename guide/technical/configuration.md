# Configuration

Open Election Compass is configured using JSON files. Every JSON contains all information needed in
a single language. To support multiple languages, you simply create multiple JSON files.

::: tip Did we mention the Configurator?
You can write the configuration from scratch, and there are situations, where you might have to. But
you can also give our Configurator a try. It will generate and edit JSON files in our specific
schema for you. This is especially useful for anyone with less technical experience.

[:point_right: Configurator](/configurator/version-1/language-file.html)
:::

## General Information

On the root level, the JSON files contain general information, like the title and subtitle, as
displayed in the start section of every election compass.

```json
{
  "title": "Hogwarts Head Boy and Girl Elections 1993",
  "subtitle": "An election compass by Hermione Granger",
  "language": "en"
}
```

### title

The title of the election. Will be displayed as a `h1` element in the start section. Should be
precise and not too long.

Example: `"General Election of the United Nations 2050"`

### subtitle

The subtitle, visible in the start section. Should, for example, mention the responsible
organization.

Example: `"This election compass is provided by your local democracy support group."`

### language

A two letter, lowercase language code as defined by
<a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">ISO 639-1</a>.

Example: `"en"` for English, `"de"` for German, etc.

## Parties

The `parties` property in the root section contains an array of parties:

```json
{
  // root object (title, etc.)
  // ...
  "parties": [
    {
      "alias": "spew",
      "name": "Society for the Promotion of Elvish Welfare",
      "short": "SPEW",
      "description": "The Society for the Promotion of Elvish Welfare was founded in 1991 and has since put great efforts into improving the lifes of those in our service.",
    },
    {
      // another party
    }
  ],
}
```

### parties[].name

The full name of the party, without abbrevations.

Example: `"Super Democratic Party"`

### parties[].short

The abbrevation or short name of the party, as it is usually used in logos, charts, etc.

Example: `"SCP"`

### parties[].alias

The identifier of the party, used for technical purposes. Simply enter the abbrevation of the party
name in small letters and make sure it is unique (no two parties may have the same identifier). The
identifier is used in the theses objects to map the positions to the respective parties.

Example: `"scp"`

### parties[].description

A small description of the history or the political direction of this party.

Example: `"The SCP was established in 2000 and is a very cool party. Vote for it. It is very good."`

<small>(Of course, this is a terrible example :wink:)</small>

### parties[].logo (optional)

The party's logo. This string will be passed to the `src` attribute of an `img` element. You can
therefore use an URL or a Base64 encoded file. For simplicity, this is what the configurator will
do. Whichever you choose, make sure the files are as small as possible, compatible with all browsers
and vector based whenever possible. SVG files work best, PNG is second and JPG is third. The images
should have the following dimensions: 400 x 400 px.

Example for Base64: `"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQi..."`
Example for URL: `"https://example.com/logos/scp.svg"`

## Theses

The `theses` property in the root section contains an array of theses:

```json
{
  // root object (title, etc.)
  // ...
  "theses": [
    {
      "title": "Sorting Hat",
      "statement": "The Sorting Hat should implement a GDPR-compliant privacy policy.",
      "positions": {
        "spew": {
          "position": "approve",
          "explanation": "If all of this comes off as mixed-up to you, that's because it is! ..."
        },
        "snape": {
          "position": "reject",
          "explanation": "Our feature set is unparalleled in the industry, ..."
        },
        // more positions
      }
    },
    {
      // another thesis
    }
  ],
}
```

### theses[].title

A short name, describing what this thesis is about. Two to four words. Will be visible above the
actual statement.

Example: `"Political Education"`

### theses[].statement

The actual thesis. Choose your words carefully! The thesis needs to be balanced and specific enough.
Explain what should be implemented, but don't be too detailed about how this might be achieved.

Example: `"The government should support political education by financing the election compass."`

### theses[].positions[]

Every thesis has a `positions` key containing an array of answers:

```json
{
  // thesis object
  // ...
  "spew": {
    "position": "approve",
    "explanation": "If all of this comes off as mixed-up to you, that's because it is! ..."
  },
  {
    // another position
  }
}
```

#### theses[].positions[].position

The parties position regarding the respective thesis.

Possible values:

- `approve` – The party approves this thesis.
- `neutral` – The party is neutral to this thesis.
- `reject` – The party rejects this thesis.
- `skip` – The party didn't provide any position.

#### theses[].positions[].explanation

The parties explanation regarding their position.

Example: `"If all of this comes off as mixed-up to you, that's because it is! ..."`