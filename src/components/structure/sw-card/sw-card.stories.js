import SwCard from './sw-card.vue';
import SwContextMenuItem from '../../context-menu/sw-context-menu-item/sw-context-menu-item.vue'
import SwTabs from '../../base/sw-tabs/sw-tabs.vue'
import SwAvatar from '../../base/sw-avatar/sw-avatar.vue'

export default {
  title: 'Components/structure/sw-card',
  component: SwCard,
  argTypes: {
    title: {
      control: { type: 'text' },
      table: {
        category: 'props'
      }
    },
    subtitle: {
      control: { type: 'text' },
      table: {
        category: 'props'
      }
    },
    'context-actions': {
      control: { type: null }
    },
    grid: {
      control: { type: null }
    },
    tabs: {
      control: { type: null }
    },
    avatar: {
      control: { type: null }
    },
    'before-card': {
      control: { type: null }
    },
    'after-card': {
      control: { type: null }
    },
  },
};

const MinimalTemplate = (args, { argTypes }) => ({
  components: { SwCard, SwContextMenuItem, SwTabs, SwAvatar },
  props: Object.keys(argTypes),
  template: `
  <sw-card v-bind="$props">
    <template slot="default">
      <div v-html="$props.default"></div>
    </template>
  </sw-card>`
});

const ExtendedTemplate = (args, { argTypes }) => ({
  components: { SwCard, SwContextMenuItem, SwTabs, SwAvatar },
  props: Object.keys(argTypes),
  template: `
  <sw-card v-bind="$props">
    <template slot="default">
      <h4>
        Active Tab: {{ activeTab }}
      </h4>
      
      <div v-html="$props.default"></div>
    </template>

    <div slot="toolbar" v-if="$props.toolbar" v-html="$props.toolbar"></div>
    <sw-tabs v-if="$props.tabs" 
             slot="tabs"
             :default-item="activeTab"
             @new-item-active="setContent"
             :items="[
                { label: 'Tab A', name: 'tabA' },
                { label: 'Tab B', name: 'tabB' },
                { label: 'Tab C', name: 'tabC' },
             ]"
    ></sw-tabs>
    <div slot="footer" v-html="$props.footer"></div>
    <div v-if="$props.avatar" slot="avatar">
      <sw-avatar firstName="Max" lastName="Mustermann" variant="square" />
    </div>
    <div slot="headerRight" v-html="$props.headerRight"></div>
    <div v-if="$props.contextActions" slot="context-actions">
      <sw-context-menu-item>Menu Item A</sw-context-menu-item>
      <sw-context-menu-item>Menu Item B</sw-context-menu-item>
      <sw-context-menu-item>Menu Item C</sw-context-menu-item>
    </div>
  </sw-card>`,
  data() {
    return {
      activeTab: 'tabA'
    }
  },
  methods: {
    setContent(item) {
      this.activeTab = item.name;
    }
  }
});

export const Minimal = MinimalTemplate.bind();
Minimal.args = {
  default: `
  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  <br>
  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
  <br>
  `,
  title: 'Title',
  subtitle: 'Subtitle',
  toolbar: null,
  footer: null,
  headerRight: null,
  hero: false,
  isLoading: false,
  large: false,
  avatar: null,
};
Minimal.storyName = 'Minimal';

export const Extended = ExtendedTemplate.bind();
Extended.args = {
  default: `
  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  <br>
  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
  <br>
  `,
  toolbar: `<p>Toolbar</p>`,
  footer: '<p><strong>Footer</strong></p>',
  title: 'Title',
  subtitle: 'Subtitle',
  headerRight: 'Header right',
  hero: false,
  isLoading: false,
  large: false,
  avatar: 'AVTR',
  tabs: true,
  contextActions: true,
};
Extended.storyName = 'Extended';