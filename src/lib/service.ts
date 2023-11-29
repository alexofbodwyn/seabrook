import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getNavigation() {
  const data = await fetchAPI(
    `
    query GET_MENU_BY_NAME {
      menu(id: "Navigation New", idType: NAME) {
        name
        menuItems {
          nodes {
            id
            databaseId
            url
            cssClasses
            label
            connectedNode {
              node {
                uri
              }
            }
          }
        }
      }
    }
    `
  );

  return data?.menu?.menuItems.nodes;
}

export async function getContact() {
  const data = await fetchAPI(
    `
    query ContactUs {
      page(id: "contact-us", idType: URI) {
        id
        title(format: RENDERED)
        content
      }
    }
    `
  );

  return data?.page;
}

export async function getFrontPage() {
  const data = await fetchAPI(
    `
    query FrontPage {
      page(id: "/", idType: URI) {
        id
        title(format: RENDERED)
        content
        blocks {
          attributesJSON
          order
          innerBlocks {
            attributesJSON
          }
        }
      }
    }
    `
  );

  return data?.page;
}

export async function sendEmail(subject:string, body:any, mutationId = 'contact') {
  const fromAddress = 'clientsupport@seabrookfinance.com';
  const toAddress = 'clientsupport@seabrookfinance.com';
  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  if (!data || data.errors) {
    console.error('Error sending email:', data.errors || 'No response');
  }

  return data
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}