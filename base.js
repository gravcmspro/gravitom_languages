'use babel';

/**
  This file is part of "Centre" Gravitom package developed by GravCMS Pro and
  it is distributed under a proprietary license, summarized down below.

    - License expires each year and must be renewed paying a fee
    - Commercial use allowed
    - Backlink to Grav CMS Pro website is not required
    - Can modify source-code but cannot distribute modifications (derivative works)

  The full license is distributed with this package. If you do not receive your
  license copy, write to info@gravcmspro.com. To use this software you must agree
  with this license.

  Copyright (c) Grav CMS Pro - All rights reserved
*/

export default {
    'errors': {
        'yaml_malformed': `Looks like the yaml in page header is malformed. The parser reports this error:\n\n{0}.\n\n` + `To fix this issue, be sure special characters {}[],&*#?|-<>=!%@ are escaped and indentation is correct.`,
        'shortcode_not_renderable': `The shortcode just entered is not renderable by Grav because the <b>{0}</b> plugin is missing in your Grav web site. Please install it through Grav GPM to solve the issue.`
    },
    'commands': {
        'modular': `Renders the page modules. This shortcode uses header configuration`,
        'main_component': `Main component properties`,
        'item_component': `Item component properties`,
        'common_items_component': `All items`,
        'image_component': `Image item`,
        'anchor': `Adds an anchor placeholder. Change the attributes' name property, anchor_name in this example, to define your anchor`,
        'container': `When true contains and centers the component grid`,
        'columns_size': `Defines the size for all the item's columns`,
        'column_padding': `Defined the columns padding`,
        'image_size': `Defines the size for all the images`,
        'image_scale': `Scales the image when the cursor is placed hover it`,
        'image_full_path': `The full image path`,
        'image_dir': `The image directory`,
        'image_src': `The image name with the extension. Set a blank value for no image`,
        'image_blurred_src': `Defines the blurred images name with the extension, which takes place of main one when user scrolls down the page. Set a blank value for no image`,
        'background_attached': `When true sets the background as attached`,
        'image_alt': `The image alt attribute. This parameter is mandatory and cannot be blank`,
        'image_title': `The image title attribute`,
        'image_classes': 'CSS classes added to the image',
        'image_actions': 'Grav image actions added to the image. Action and values are separated by a colon and properties are separated by a semicolon. Example="lightbox:600,800;resize:200,200"',
        'url': `The url to link the image. Leave it empty to leave the image unlinked`,
        'highlight_color': `Defines the highlight color`,
        'highlight_color_row1': `Defines the highlight color for the first row`,
        'highlight_color_row2': `Defines the highlight color for the second row`,
        'attributes': `Adds html attributes to element. Example attributes="class: foo, rel=bar"`,
        'link_attributes': `Adds html attributes to link element. Example attributes="class: foo, rel=bar"`,
        'icon_attributes': `Adds html attributes to icon element. Example attributes="class: foo, rel=bar"`,
        'image_attributes': `Adds html attributes to image element. Example attributes="class: foo, rel=bar"`,
        'container_attributes': `Adds html attributes to container element. Example container_attributes="class: foo, rel=bar"`,
        'row_attributes': `Adds html attributes to the item's grid row`,
        'left_column_attributes': `Adds html attributes to the left grid column`,
        'right_column_attributes': `Adds html attributes to the right grid column`,
        'row_extra_attributes': `Adds extra html attributes to item's grid row class element. to add an extra foo class and a new rel attribute, you can define this parameter as follows: M_EXTRA_ATTRIBUTES="foo, rel=bar`,
        'content_attributes': `Adds html attributes to the div that contains the content. Example attributes="class: foo, rel=bar"`,
        'extra_attributes': `Adds extra html attributes to class element. to add an extra foo class and a new rel attribute, you can define this parameter as follows: M_EXTRA_ATTRIBUTES="foo, rel=bar`,
        'text_alignment': 'Sets the text alignment. This parameter accepts the following values: left, center, right',
        'map_component': `Google Map component properties`,
        'map_api_key': `Api key provided by Google`,
        'map_zoom': `Initial map zoom`,
        'map_point_center': `Initial map point center`,
        'map_point_location': `Initial map point location`,
        'map_title': `Map title displayed when the user clicks the marker`,
        'recaptcha_form_component': `Recaptcha form component properties`,
        'recaptcha_form_site_key': `Site key provided by Google`,
        'recaptcha_form_site_secret': `Site secret key provided by Google`,
        'recaptcha_form_name_placeholder': `Name field placeholder`,
        'recaptcha_form_mail_placeholder': `Email field placeholder`,
        'recaptcha_form_submit_text': `The submit button text`,
        'icon': `Defines the icon. You can choose from several kind of icons: material icons, fontawesome, material and glyphicon`,
        'icon_size': `The icon size. Possible values are: tiny, small, medium, large`,
        'large_icon': `Displays the icon large`,
        'bordered': `Displays the icon circled by a border. Usage: bordered="true"`,
        'colored': `Displays the icon full colored using the Material primary color. Usage: colored="true"`,
        'centered': `Centers the icon. Usage: center="true"`,
        'stacked': `Works only for fontawesome icon. Displays a stacked icon. Usage: stacked="true"`,
        'icon_container': `Works only when the icon is stacked. Defines the stacked icon container. Usage icon-container="circle"`,
        'rich_iconed_list': `Displays a rich list with icons using the tag shortcode. Use this shortcode when you need to add html attributes to a list or to a list item. Please see tag and icon shortcodes to properly use them.`,
        'rich_list': `Displays a rich list using the tag shortcode. Use this shortcode when you need to add html attributes to a list or to a list item. Please see tag and icon shortcodes to properly use them.`,
        'rich_image_url': `The url of the page to go to. When you valorize this property, pay attention to not add another link in the content, otherwise the element is not properly rendered.`,
        'scale': `When true the image scales to big, when the mouse cursor is placed over it`,
        'tag': `the html tag to display. Accepts all html tags. Example tag="div"`,
        'shared_content': `
  To use shared contents:

  - Add a components folder under the user folder of your Grav application
  - Add a subfolder and change the FOLDER_NAME placeholder using the name of that folder
  - Add a component file and change the COMPONENT_NAME placeholder using that name.

  EXAMPLES
  The correct directive for a user/components/shared/navbar.component file is <| SHARED.NAVBAR |>
  The correct directive for a user/components/common/navbar.component file is <| COMMON.NAVBAR |>`,
        'box_size': `Defines the size for all the item's boxes. This property accepts the following values:box-ultra-tiny, box-tiny, box-small, box-medium, box-large, box-huge`,
        'jumbotron_height': `Defines the jumbotrn height. This property accepts the following values: 'full, three-quarters, half'`,
        'breadcrumb': `Renders a breadcrumb navigation menu. This shortcode does not require parameters.`,
        'card_attributes': `Adds html attributes to card element. Example card-attributes="class: blue-grey darken-1"`,
        'card_content': `Adds html attributes to content element. Example card-content-attributes="class: text-white"`,
        'price_card_title': `sets the card's title`,
        'price_card_subtitle': `sets the card's subtitle`,
        'price_card_price': `sets the card's price`,
        'card_size': `defines the card size. This parameters accepts "small, medium, large" values`,
        'card_sticky': `does not overly the action section. Usage: sticky="true"`,
        'button_url': `defines the button url `,
        'button_label': `defines the button label`,
        'subtle_card_effect': `The effect to apply to subtle card.  here are are seven effects available you can choose from: effect-[1-7]`,
        'grid_component': `Grid shortcode represent a Materializer grid and always requires both a "m-grid-row" and "m-grid-col" shortcodes. Please notice the "m-grid-col" does not require the "col" class.`,
        'shortcode_properties': `shortcode properties`,
        'type': `bbb`,
        'layout': `bbb`,
        'position': `bbb`,
        'showLink': `bbb`,
        'theme': `bbb`,
        'palette': `bbb`,
        'header': `bbb`,
        'link': `bbb`,
        'href': `bbb`,
        'dismiss': `bbb`,
        'allow': `bbb`,
        'deny': `bbb`,
        'google_adsense': `This shortcode accepts mixed parameters depending on the Google's Adsense generated code, so you can add as many parameters you need to this element`,
        'id_attribute': `Defines the html id attribute`,
        'google_analytics_user_id': `The user id provided with Google's code`,
        'google_map_zoom': `Google map zoom attribute`,
        'google_map_center': `Google map center attribute`,
        'google_marker': `Google map marker attributes`,
        'google_map_location': `Google map marker location attribute`,
        'google_map_title': `Google map marker title attribute`,
        'sidebar_id': `defines the id of the sidebar opened for small screens`,
        'root_page': `the name of the page which children will be rendered. By default it is the home page`,
        'submenu': `renders the given pages as a dropdown. Usage: submenu="page1,page2"`,
        'menu_template': `defines the template to render. It renders the base menu when the property is not defined`,
        'menu_alignment': 'Sets the menu alignment. This parameter accepts the following values: left, center, right',
        'menu_extra_item': `
  An arbitrary menu link not included in the processed page can be rendered, adding a m-menu-item shortcode:

    [m-menu-item position="before" url="#" menu="Label"][/m-menu-item]

  position: the menu position. This property accepts the "before,after" values and "after" is the default value used when the property is empty
  url: the url to render
  menu: the menu label`,
        'navbar_transparent': `renders the navbar transparent for the given menu pages, comma separated or for the whole pages, when the "all" param is given. Usage navbar-transparent="all" or transparent="menu page1,menu page2,menu page3"`,
        'navbar_brand_url': `Defines the brand element url. When empty link to website homepage`,
        'navbar_brand_link_attributes': `adds html attributes to brand link. Example attributes="class: foo, rel=bar"`,
        'navbar_brand_image': `defines the brand image`,
        'navbar_brand_image_attributes': `adds html attributes to element. Example attributes="class: foo, rel=bar". This property works only when brand_image property is defined`,
        'navbar_brand_image_path': `defines the brand image path`,
        'navbar_brand_name': `defines the brand as a text`,
        'navbar_brand_icon': `defines an icon placed an the left of the brand`,
        'navbar_brand_align': `defines the brand alignment. It accepts the left, center or right values`,
        'navbar_items': `
  By default the navbar shortcode just requires the m-menu shortcode to render the site navigation menu. Optionally, it accepts the m-navbar-item, to render complex navbars. See components section to

  Here it is an example:
  [m-navbar-item attributes="class:navbar-top-content"]
    [m-grid container="false"]
      [m-grid-row]
        [m-grid-col attributes="class:s12 m6 l6"]
          Call us today: 555.555.555555 | info@yourdomain.com
        [/m-grid-col]
        [m-grid-col attributes="class:s12 m6 l6 right-align"]
          [m-tag tag="ul" attributes="class:right padding-left-small"]
            [m-tag tag="li"][m-icon icon="fa-facebook-official"][/m-icon][/m-tag]
            [m-tag tag="li"][m-icon icon="fa-twitter"][/m-icon][/m-tag]
            [m-tag tag="li"][m-icon icon="fa-google-plus"][/m-icon][/m-tag]
          [/m-tag]
        [/m-grid-col]
      [/m-grid-row]
    [/m-grid]
  [/m-navbar-item]

  [m-navbar-item type="menu"]
    [m-menu name="menu0" template="menu/menu" alignment="right" sidebar-id="nav-mobile" submenu="centre,documentation"][/m-menu]
  [/m-navbar-item]

  Do not forget to specify the type="menu" property for the item that handles the navigation menu`
    }
}
