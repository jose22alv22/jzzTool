using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Models;

namespace Test
{
    public class jazzdb
    {
        JazzToolDataContext _db = new JazzToolDataContext();

        public List<PropsModel> GetProps(string PropTypeValue, string SportValue)
        {
            List<PropsModel> resultList = new List<PropsModel>();
            try
            {
                var resultlist = (from a in _db.sports
                                  join b in _db.PropTypeBySports on a.idSport equals b.idSport
                                  join c in _db.PropTypes on b.idPropType equals c.idPropType
                                  join d in _db.Props on b.idPropTypeBySport equals d.idPropTypeBySport
                                  join e in _db.PropByPositions on d.idProp equals e.idProp
                                  join f in _db.Positions on e.idPosition equals f.idPosition
                                  where a.sport1 == SportValue && c.propType1 == PropTypeValue
                                  select new
                                  {
                                      d.idProp,
                                      a.sport1,
                                      d.Description,
                                      d.AwayTeam,
                                      d.HomeTeam,
                                      c.propType1,
                                      f.Position1,
                                  }).ToList();

                if (resultlist.Count() > 0)
                {
                    foreach (var item in resultlist)
                    {
                        PropsModel obj = new PropsModel()
                        {
                            IdProp = item.idProp,
                            IdSport = item.sport1,
                            Prop = item.propType1,
                            AwayTeam = item.AwayTeam,
                            HomeTeam = item.HomeTeam,
                            PropType = item.propType1,
                            Position = item.Position1,
                        };
                        resultList.Add(obj);
                    }
                }
                else
                {
                    resultList = null;
                }
            }
            catch (Exception ex)
            {
                resultList = null;
                ex.ToString();
            }
            return resultList;
        }

    }
}
