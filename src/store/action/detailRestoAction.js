export const DETAIL_RESTO = "DETAIL_RESTO";

export const detailResto = (resto) => {
  return {
    type: DETAIL_RESTO,
    payload: resto,
  };
};
