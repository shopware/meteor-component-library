<script>
export default {
  name: 'SwVnodeRenderer',
  functional: true,
  render(h, context) {
    return context.props.node;
  },
};
</script>
