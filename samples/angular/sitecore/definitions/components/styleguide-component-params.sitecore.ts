import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-ComponentParams component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function StyleguideComponentParams(manifest: Manifest) {
  manifest.addComponent({
    name: 'StyleguideComponentParams',
    templateName: 'JssAngularWeb-StyleguideComponentParams',
    icon: SitecoreIcon.WindowDialog,
    params: ['cssClass', 'columns', 'useCallToAction'],
    // inherit fields from another template (../templates/Styleguide-Explanatory-Component)
    // inheritance adds fields defined on the base template(s) implicitly to this component
    inherits: ['JssAngularWeb-styleguide-explanatory-component-template'],
  });
}
