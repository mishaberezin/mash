<script>
  import { innerWidth, innerHeight } from '../../lib/utils.js';

  const min = 14;
  const max = 44;
  let parent;
  let wrapper;
  let finalStyle;
  let wrapperStyle;

  function assertElementFitsWidth(el, width) {
    // -1: temporary bugfix, will be refactored soon
    return el.scrollWidth - 1 <= width;
  }

  function assertElementFitsHeight(el, height) {
    // -1: temporary bugfix, will be refactored soon
    return el.scrollHeight - 1 <= height;
  }

  function process() {
    const onReady = () => {};

    const originalWidth = innerWidth(parent);
    const originalHeight = innerHeight(parent);

    const testPrimary = () => assertElementFitsHeight(wrapper, originalHeight);
    const testSecondary = () => assertElementFitsWidth(wrapper, originalWidth);

    let mid;
    let low = min;
    let high = max;

    series(
      [
        // Step 1:
        // Binary search to fit the element's height (multi line) / width (single line)
        stepCallback =>
          whilst(
            () => low <= high,
            whilstCallback => {
              if (shouldCancelProcess()) return whilstCallback(true);
              mid = parseInt((low + high) / 2, 10);
              this.setState({ fontSize: mid }, () => {
                if (shouldCancelProcess()) return whilstCallback(true);
                if (testPrimary()) low = mid + 1;
                else high = mid - 1;
                return whilstCallback();
              });
            },
            stepCallback
          ),
        // Step 2:
        // Binary search to fit the element's width (multi line) / height (single line)
        // in order to not fit the elements height and decrease the width
        stepCallback => {
          stepCallback();
          if (testSecondary()) return stepCallback();
          low = min;
          high = mid;
          return whilst(
            () => low < high,
            whilstCallback => {
              if (shouldCancelProcess()) return whilstCallback(true);
              mid = parseInt((low + high) / 2, 10);
              this.setState({ fontSize: mid }, () => {
                if (pid !== this.pid) return whilstCallback(true);
                if (testSecondary()) low = mid + 1;
                else high = mid - 1;
                return whilstCallback();
              });
            },
            stepCallback
          );
        },
        // Step 3
        // Limits
        stepCallback => {
          // We break the previous loop without updating mid for the final time,
          // so we do it here:
          mid = Math.min(low, high);

          // Ensure we hit the user-supplied limits
          mid = Math.max(mid, min);
          mid = Math.min(mid, max);

          // Sanity check:
          mid = Math.max(mid, 0);

          if (shouldCancelProcess()) return stepCallback(true);
          this.setState({ fontSize: mid }, stepCallback);
        }
      ],
      err => {
        // err will be true, if another process was triggered
        if (err || shouldCancelProcess()) return;
        this.setState({ ready: true }, () => onReady(mid));
      }
    );
  }

  //   function render() {
  //     const {
  //       children,
  //       text,
  //       style,
  //       min,
  //       max,
  //       forceWidth,
  //       /* eslint-disable no-shadow */
  //       throttle,
  //       /* eslint-enable no-shadow */
  //       autoResize,
  //       onReady,
  //       ...props
  //     } = this.props;
  //     const { fontSize, ready } = this.state;
  //     const finalStyle = {
  //       ...style,
  //       fontSize: fontSize
  //     };

  //     const wrapperStyle = {
  //       display: ready ? 'block' : 'inline-block'
  //     };

  //     return (
  //       <div ref={c => (this._parent = c)} style={finalStyle} {...props}>
  //         <div ref={c => (this._child = c)} style={wrapperStyle}>
  //           {text && typeof children === 'function'
  //             ? ready
  //               ? children(text)
  //               : text
  //             : children}
  //         </div>
  //       </div>
  //     );
  //   }
</script>

<style>
  .text {
    font-family: 'Open Sans', sans-serif;
  }
  .text__title {
    font-size: 62px;
    font-weight: 800;
    margin: 0;
  }
  .text__paragraph {
    font-size: 22px;
  }
</style>

<div class="textfit" bind:this="{parent}" style="{finalStyle}">
  <div class="textfit__child" bind:this="{wrapper}" style="{wrapperStyle}">
    <slot></slot>
  </div>
</div>
