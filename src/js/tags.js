
riot.tag('column', '<div class="_modifier_"><content></content></div>', function(opts) {
    this.classes = {
      md: 'col-md-',
      lg: 'col-lg-',
      sm: 'col-sm-',
      xs: 'col-xs-'
    }
    this.modifier = '';
    opts.md ? this.modifier += ' ' + this.classes.md + opts.md : false;
    opts.lg ? this.modifier += ' ' + this.classes.lg + opts.lg : false;
    opts.sm ? this.modifier += ' ' + this.classes.sm + opts.sm : false;
    opts.xs ? this.modifier += ' ' + this.classes.xs + opts.xs : false;
  
});

riot.tag('grid', '<div class="container-fluid"><div class="row"><content></content></div></div>', function(opts) {

});

riot.tag('btn', '<button class="_modifier_"><content></content></button>', function(opts) {
    this.classes = {
      active: 'active',
      disabled: 'disabled',
      block: 'btn-block',
      state: {
        default: 'btn-default',
        primary: 'btn-primary',
        success: 'btn-success',
        danger: 'btn-danger',
        warning: 'btn-warning',
        link: 'btn-link'
      },
      size: {
        lg: 'btn-lg',
        sm: 'btn-sm',
        xs: 'btn-xs'
      }
    };
    this.modifier = 'btn';
    opts.active ? this.modifier += ' ' + this.classes.active : false;
    opts.disabled ? this.modifier += ' ' + this.classes.disabled : false;
    opts.state ? this.modifier += ' ' + this.classes.state[opts.state] : this.classes.state.default;
    opts.size ? this.modifier += ' ' + this.classes.size[opts.size] : false;
    opts.block ? this.modifier += ' ' + this.classes.block : false;
  
});