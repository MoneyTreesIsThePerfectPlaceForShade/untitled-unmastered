import {PluginItem} from '@babel/core';

/**
 * Функция удаляет data-testid из production сборки.
 * @returns объект плагина, который принимает props.
 */
export function removeDataTestIdBabelPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbiddenProps = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;
            if (forbiddenProps.includes(nodeName)) {
              current.parentPath.remove();
            }
          }
        });
      }
    }
  };
}
