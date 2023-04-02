const getElementsByClassName = (root, classes) => {
    const result = []
    const arr = classes.split(' ').filter(c => c).map(c => c.toLowerCase())

    const dfs = (root) {
        
    }

    console.log(result)
    return result
}

const doc = new DOMParser().parseFromString(
    `<div class="foo bar baz">
      <span class="bar baz">Span</span>
      <p class="foo baz">Paragraph</p>
      <div class="foo bar"></div>
    </div>`,
    'text/html',
  );
  
  getElementsByClassName(doc.body, 'foo bar');
  // [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.
  