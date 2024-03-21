import { UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="rounded-lg bg-orange-100 p-4">
      <h2 className="font-bold">Who To Follow</h2>

      {/* CARD USER */}
      <div
        className="my-2 flex items-center justify-between rounded-md border
       border-gray-400 p-2"
      >
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firza</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}

      <div
        className="my-2 flex items-center justify-between rounded-md border
       border-gray-400 p-2"
      >
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firza</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}

      <div
        className="my-2 flex items-center justify-between rounded-md border
       border-gray-400 p-2"
      >
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firza</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}
    </div>
  );
};

export default CardWhoToFollow;
