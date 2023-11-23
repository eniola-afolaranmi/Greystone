interface note {
  note: string[] | undefined;
}
export type NinjaData = {
  id: number | undefined;
  name: string | undefined;
  currentActivity: number | undefined;
  currentBelt: number | undefined;
  [notes: string]: note;
};

export type CompiledData = {
  id: number | undefined;
  name: string | undefined;
  currentActivity: number | undefined;
  currentBelt: number | undefined;
  [notes: string]: note;
};
