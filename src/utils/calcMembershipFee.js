/**
 * Code that calculates the membership fee
 * Formula is: <fee> + VAT
 * 
 * VAT = 20% (of something, assuming rent per week)
 * 
 * If fixedMembershipFee is set, <fee> = fixedMembership fee
 * Else <fee> is equal to 1 weeks rent OR £120, whichever is greater. 
 * 
 * @param {fixedMembershipFee, rentType, rentValue} param0 
 */
const MembershipFee = ({ fixedMembershipFee, fixedMembershipFeeAmount, rentType, rentValue }) => {
    let membershipFee

    if (fixedMembershipFee) {
        membershipFee = fixedMembershipFeeAmount;
    } else {
        // Going to use/assume 4.34524 weeks per month (bc Google told me so)
        rentValue = rentType === 'week' ? rentValue : (rentValue / 4.34524)
        if (rentValue < 120) rentValue = 120
        membershipFee = rentValue
    }

    membershipFee = Math.floor(membershipFee + (0.2 * membershipFee))
    
    return membershipFee
}

export default MembershipFee;