export interface UserCreditRecord {
  total: number;
  used: number;
  left: number;
}

export interface UserCredits {
  free: UserCreditRecord;
  purchased?: UserCreditRecord;
}

