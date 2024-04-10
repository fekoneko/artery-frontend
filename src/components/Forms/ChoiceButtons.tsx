import { Dispatch, SetStateAction } from 'react';

export interface Choice<Value> {
  label: string;
  value: Value;
}

interface ChoiceButtonsProps<State> {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
  choices: Choice<State>[];
}
const ChoiceButtons = <State extends unknown>({
  state,
  setState,
  choices,
}: ChoiceButtonsProps<State>) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {choices.map((choice) => (
        <button
          key={choice.label}
          onClick={() => setState(choice.value)}
          className={state === choice.value ? 'bg-slate-400 font-semibold text-slate-800' : ''}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
};
export default ChoiceButtons;
