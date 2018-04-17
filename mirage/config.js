export default function() {
  this.urlPrefix = '';
  this.namespace = '/api';
  this.timing = 400;
  this.total = 1;

  this.get('/books'
    , { timing: 1200 }
  );

  this.get('/students'
    // uncomment to simulate a 503 error
    //
    // , function () {
    //   return new Response(503, { some: 'header', 'Content-Type': 'application/json' }, {
    //     errors: [{
    //       status: 503,
    //       title: 'Backend fetch failed',
    //       description: 'Backend fetch failed'
    //     }]
    //   });
    // }
    //
    , { timing: 3000 }
  );
  this.get('/messages', ({ messages }) => {
    const msgs = messages.all();
    this.total += 1;
    return msgs.slice(0, this.total);
  }
  , { timing: 500 }
  );
}
