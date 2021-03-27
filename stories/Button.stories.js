import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
