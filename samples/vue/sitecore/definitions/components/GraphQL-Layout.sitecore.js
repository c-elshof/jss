// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the GraphQL-Layout component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'GraphQL-Layout',
    templateName: 'JssVueWeb-GraphQL-Layout',
    icon: SitecoreIcon.Layout,
    placeholders: ['JssVueWeb-jss-graphql-layout'],
  });
}
