

export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
            description: 'Headline of the Article'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'headline',
                maxLength: 100
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'firstParagraph',
            title: 'Opening Paragraph',
            type: 'text',
            description: 'The Opening teaser paragraph of the article'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        }
    ]
}