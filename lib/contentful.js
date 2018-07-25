import {createClient} from 'contentful';

const ENV = {
  contentful: {
    space: '',
    accessToken: '',
    previewAccessToken: '',
    usePreviewApi: true,
    resolveLinks: true,
  },
};

const client = createClient(ENV.contentful);

export const getModules = async() => {
  const mainEntry = await client.getEntries({'sys.id':'3T9sTlkUHYE2Kaa4CuqK24', include: 10});

    return {
      subModules: mainEntry.items[0].fields.modules,
      mainEntry: mainEntry.items[0].fields,
      metaData: mainEntry.items[0].fields.metadata.fields,
    };
}
