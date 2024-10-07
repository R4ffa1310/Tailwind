export const DETAIL_RESTO = "DETAIL_RESTO";

export const detailresto = (resto) => {
      return {
        type : DETAIL_RESTO,
        payload:resto,
    }
}