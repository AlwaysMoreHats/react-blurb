var React = require('react');
var Blurb = require('./blurb.jsx');

require('./style.css');


var children = [];

children.push(
  <Blurb title="Lorem Ipsum" summary="Classic Greeking Text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa
    semper, vestibulum urna at, finibus turpis. Etiam ut suscipit orci,
    volutpat pretium arcu. Quisque at ipsum quam. Mauris aliquam dui ac
    ornare pharetra. In facilisis libero sed ipsum posuere luctus. Vestibulum
    ornare rutrum pharetra. Ut in elit felis. Cras malesuada ullamcorper leo,
    in cursus orci condimentum molestie. Duis eleifend egestas magna, at
    iaculis lorem interdum et.
  </Blurb>
);
children.push(
  <Blurb title="Brizzle Ipsum" summary="Hip-hop(?) greeking">
    All right me luvver ipsum dolor sit amet ohm zider consectetur cillum anim
    tiz in aute. Wassat tamorra ill dolor brissle zider adipisicing dollop qui
    eadfit aute pacifically nostrud et alright me babber. Waz satter member
    veniam, velit esse ow bist dint commodo laboris. Proident inchew glider
    voluptate, commodo cupidatat wanna incididunt in Cane Shum tamorra non
    anim deserunt were bis to. Do laborum casnt glider irure, ad thee officia.
  </Blurb>
);
children.push(
  <Blurb
    title="Coffee Ipsum"
    summary="Nonsense text that you'd overhear from that indecisive guy at Starbucks"
  >
    Chicory redeye viennese filter cream doppio viennese. Foam affogato, white
    mocha sweet kopi-luwak flavour crema a chicory roast organic. Seasonal
    kopi-luwak caffeine cappuccino viennese whipped instant to go sweet. Foam
    turkish, seasonal aftertaste, aroma medium con panna mocha fair trade and
    latte white. Barista, latte rich cup et, whipped organic body id redeye.
  </Blurb>
);
children.push(
  <Blurb title="Cupcake Ipsum" summary="Nonsense text that makes you hungry">
    Dragee dessert danish ice cream. Gummi bears candy cake bonbon gingerbread
    powder topping marzipan dragee. Marshmallow cake pudding carrot cake
    chocolate cake gummi bears. Pie wafer brownie bonbon gingerbread marzipan
    caramels caramels. Chocolate chocolate cake chupa chups ice cream cotton
    candy biscuit. Biscuit topping powder. Chocolate chocolate marzipan
    croissant souffle tart. Pastry carrot cake macaroon candy. Sesame snaps
    chupa chups cake. Croissant cheesecake chocolate. Biscuit sugar plum
    souffle cotton candy. Cupcake gummies biscuit lemon drops. Pudding
    jujubes apple pie muffin toffee.
  </Blurb>
);
children.push(
  <Blurb title="Whedon Ipsum" summary="Nonsense quotes from Joss Whedon's works">
    You'd best make peace with your dear and fluffy Lord. Freedom is life's
    great lie. Darn your sinister attraction! Love keeps her in the air when
    she ought to fall down. I'll never leave. Not even if you kill me. In
    their resting state, our actives are as innocent and vulnerable as
    children. It's getting eerie, what's this cheery singing all about?
    Should I start this program over? If every vampire who said he was at
    the crucifixion actually was there, it would've been like Woodstock.
  </Blurb>
);

React.render(<div>{children}</div>, document.getElementById('content'))