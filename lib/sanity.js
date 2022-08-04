import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '01gm3gwt',
    dataset: 'production',
    apiVersion: '2022-07-16',
    token: 'skgoub0p9j09kR9r26izVeFBQBSWnPwbXRDiwYYzYi1vdyuG7T1vUlhCWZBnLqfW8ElchgeEn4nTm7STqkUGJ6z4qavCz1c5yZXOfiJKici5o6Qw2gKbmlpXbabmFBtuGqHC9xPKbQuRAqCgWgwTIlF911P1bceObwPpLjMJzlJ3OHCpgw0I',
    useCdn: false,
})