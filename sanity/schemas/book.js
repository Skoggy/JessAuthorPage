import PriceInput from '../components/PriceInput';


export default {
    name: "book",
    title: 'Book',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Book Title',
            type: 'string',
            description: 'Name of the Book'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                souce: 'name',
                maxLength: 100,
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
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the book in cents',
            validation: (Rule) => Rule.min(1000),
            inputComponent: PriceInput,
        }
    ]
}