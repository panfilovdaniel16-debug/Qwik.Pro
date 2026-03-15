const METRIKA_ID = 107706876

export function reachGoal(goal, params) {
  if (typeof window.ym === 'function') {
    window.ym(METRIKA_ID, 'reachGoal', goal, params)
  }
}
