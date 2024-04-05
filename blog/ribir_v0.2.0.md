# Announcing Ribir v0.2.0

We're excited to announce the completion of Ribir v0.2.0's development and the release of its first beta version. This release introduces two significant features: overlay support and the ability to use Ribir without "DSL".

## Overlay Support

This feature simplifies the process of creating overlay widgets. It streamlines the addition of any widget to an overlay and provides a more user-friendly API for managing overlays.

You can use any widget to create an overlay, which will then appear on top of the current screen.

```rust
use ribir::prelude::*;

fn main() {
  let overlay = Overlay::new(fn_widget! {
    @Text {
      h_align: HAlign::Center,
      v_align: VAlign::Center,
      text: "Hello"
    }
  });
  
  let w = fn_widget! {
    @FilledButton{
      on_tap: move |e| overlay.show(e.window()),
      @{ Label::new("Click to show overlay") }
    }
  };
  
  App::run(w);
}
```

Refer to its APIs to learn about all the features it offers.

## Ribir without "DSL"

While macros aren't a necessary part of using Ribir, our initial version didn't provide documentation or user-friendly APIs for building the UI without them. This release addresses that issue by providing a more straightforward API for building widgets without macros.

With macros:

```rust
use ribir::prelude::*;
fn main() {
  let counter = fn_widget! {
    let cnt = Stateful::new(0);
    @Row {
      @FilledButton {
        on_tap: move |_| *$cnt.write() += 1,
        @{ Label::new("Inc") }
      }
      @H1 { text: pipe!($cnt.to_string()) }
    }
  };
  App::run(counter);
}
```

Without macros:

```rust 
use ribir::prelude::*;

fn main() {
  let counter = |ctx: &BuildCtx| {
    let cnt = Stateful::new(0);

    let c_cnt = cnt.clone_writer();
    let inc_btn = FilledButton::declarer()
      .on_tap(move |_| *c_cnt.write() += 1)
      .finish(ctx)
      .with_child(Label::new("Inc"), ctx);

    let counter = H1::declarer()
      .text(pipe!($cnt.to_string()))
      .finish(ctx);

    Row::declarer()
      .finish(ctx)
      .with_child(inc_btn, ctx)
      .with_child(counter, ctx)
      .build(ctx)
  };

  App::run(counter);
}

```


In this version, we've refined the APIs and updated the [guide](https://ribir.org/docs/understanding_ribir/without_dsl) to demonstrate how to use Ribir without the "DSL" feature.


## Additional Changes

Visit the [Ribir](https://github.com/RibirX/Ribir/releases/tag/ribir-v0.2.0-beta.1) page for more details.
