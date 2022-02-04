import { gql, useQuery } from '@apollo/client';

const GET_DOG = gql`
  query GetDog($id: ID!) {
    character(id: $id)  {
      name
      id
      image
      episode {
          name
          episode
      }
    }
  }
`
export const useDog = (id) => {
    const { loading, data, error } = useQuery(GET_DOG, {
        variables: {
            id,
        }
    });

    return {
        data,
        loading,
        error
    }
}
