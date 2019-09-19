using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JazzDataBase.Models
{
        public class PropsModel
        {
            public int IdProp { get; set; }
            public string IdSport { get; set; }
            public string Prop { get; set; }
            public string AwayTeam { get; set; }
            public string HomeTeam { get; set; }
            public string PropType { get; set; }
            public string Position { get; set; }
        }
}
