import SwornMemberContainer from "@/container/swornMember/swornMember";

export default function SwornMemberPage ({ params }: { params: { number: string } }){
  return <SwornMemberContainer number={parseInt(params.number)}/>
}