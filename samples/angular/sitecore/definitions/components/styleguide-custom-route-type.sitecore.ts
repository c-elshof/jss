import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-CustomRouteType component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function StyleguideCustomRouteType(manifest: Manifest) {
  // This registers the custom route type with the manifest.
  // Like a component, a route type contains data fields -
  // but unlike a component, the fields are shared at the route level,
  // instead of at the component level. This is good for scenarios such as
  // article sections, where you may wish to use route-level fields for
  // _sorting and filtering_ (it's difficult to query on component-level field data).
  manifest.addRouteType({
    name: 'JssAngularWeb-ExampleCustomRouteType',
    fields: [
      { name: 'headline', type: CommonFieldTypes.SingleLineText },
      { name: 'author', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });

  // We're also adding a component, that we can put on our sample custom route type route.
  // This component will display the route level fields on the custom route type.
  manifest.addComponent({
    name: 'StyleguideCustomRouteType',
    templateName: 'JssAngularWeb-StyleguideCustomRouteType',
    icon: SitecoreIcon.DocumentTag,
  });
}
